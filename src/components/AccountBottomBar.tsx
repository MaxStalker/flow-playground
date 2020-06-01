import React, { useState, useEffect } from "react";
import {
  useSetExecutionResultsMutation,
  ResultType
} from "../api/apollo/generated/graphql";

import { FaArrowCircleRight } from "react-icons/fa";
import { GoGrabber } from "react-icons/go";
import Button from "./Button";
import { useProject } from "providers/Project/projectHooks";
import useMousePosition from "../hooks/useMousePosition";
import { Feedback as FeedbackRoot } from "layout/Feedback";
import { FeedbackActions } from "layout/FeedbackActions";
import { SidebarItemInsert } from "layout/SidebarItemInsert";
import styled from "util/styled";
import { Heading } from "layout/Heading";

import { RenderResponse } from "components/RenderResponse";
import { ClearResults } from "./TransactionBottomBar";

const STORAGE_PANEL_MIN_HEIGHT = 180;
const PLAYGROUND_HEADER_HEIGHT = 75;

const TypeListItem = styled.li<{ active: boolean }>`
  padding: 14px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.active ? p.theme.colors.storageItemColor : ``};
  background: ${(p) => p.active ? p.theme.colors.activeStorageItemBackground : ``};
  &:hover {
    background: ${(p) => p.theme.colors.activeStorageItemBackground};
  }
`;

const AccountStateContainer = styled.div<{ height: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: ${p => `1px solid ${p.theme.colors.border}`};
  background: ${p => p.theme.colors.storageBackground};
  min-height: ${p => p.height || STORAGE_PANEL_MIN_HEIGHT}px;
`;

const StorageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: ${p =>`1px solid ${p.theme.colors.border}`};
`;

const StateWrapper = styled.div`
  width: 100%;
  background-color: ${p => p.theme.colors.stateContainerBackground};
  padding-top: 2em;
  padding-bottom: STORAGE_PANEL_MIN_HEIGHT - 40;
  padding-left: 1.5em;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[4]};
  overflow: auto;
`;

const DeploymentResultContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${p => p.theme.colors.deploymentContainerBackground};
  border-top: ${p => `1px solid ${p.theme.colors.border}`};
`;

interface TypeListProps {
  identifiers: string[];
  selected: string;
  onSelect: (type: string) => void;
  toggleResizing: (toggle: boolean) => void;
}
// @ts-ignore
const IdentifierList: React.FC<TypeListProps> = ({
  identifiers,
  selected,
  onSelect,
  toggleResizing
}) => (
  <StorageListContainer>
    <Heading>
      Storage
      <SidebarItemInsert grab={true}>
        <GoGrabber size="16px" onMouseDown={() => toggleResizing(true)} />
      </SidebarItemInsert>
    </Heading>

    <div
      style={{
        width: "288px",
        overflow: "auto"
      }}
    >
      <ul>
        {identifiers.map((type: string) => (
          <TypeListItem
            key={type}
            active={type == selected}
            onClick={() => onSelect(type)}
          >
            {type}
          </TypeListItem>
        ))}
      </ul>
    </div>
  </StorageListContainer>
);

const StateContainer: React.FC<{ value: any }> = ({ value }) => (
  <StateWrapper>
    <pre>{JSON.stringify(value, null, 2)}</pre>
  </StateWrapper>
);

const AccountState: React.FC<{
  state: any;
  renderDeployButton: () => JSX.Element;
}> = ({ state, renderDeployButton }) => {
  if (!state) {
    state = "{}";
  }

  const storage: { [identifier: string]: string } = {};

  const parsed = JSON.parse(state);

  for (let key in parsed) {
    if (!parsed.hasOwnProperty(key)) {
      continue;
    }

    const [domain, identifier] = key.split("\u001f");

    if (domain === "storage") {
      storage[identifier] = parsed[key];
    }
  }

  const identifiers = Object.keys(storage);

  // @ts-ignore
  const [selected, setSelected] = useState(
    identifiers.length > 0 ? identifiers[0] : null
  );

  const { x, y } = useMousePosition();
  const [panelHeight, setPanelHeight] = useState(STORAGE_PANEL_MIN_HEIGHT);
  const [isResizing, setIsResizing] = useState(false);

  const toggleResizing = (toggle: boolean) => {
    setIsResizing(toggle);
  };

  const toggleResizeListener = () => {
    toggleResizing(false);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (
        isResizing &&
        y > STORAGE_PANEL_MIN_HEIGHT &&
        y < window.innerHeight - PLAYGROUND_HEADER_HEIGHT
      ) {
        setPanelHeight(y);
      }
    }
  }, [x, y]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      //@ts-ignore
      window.addEventListener("mouseup", toggleResizeListener, false);
    }
    return () => {
      //@ts-ignore
      window.removeEventListener("mouseup", toggleResizeListener, false);
    };
  }, []);

  return (
    <div>
      <AccountStateContainer height={panelHeight}>
        {renderDeployButton()}
        <IdentifierList
          identifiers={identifiers}
          selected={selected}
          onSelect={setSelected}
          toggleResizing={toggleResizing}
        />
        <StateContainer value={storage[selected]} />
      </AccountStateContainer>
      <DeploymentResultContainer>
        <Heading>
          Deployment Result
          <ClearResults type={ResultType.Contract} />
        </Heading>
        <RenderResponse resultType={ResultType.Contract} />
      </DeploymentResultContainer>
    </div>
  );
};

const AccountBottomBar: React.FC = () => {
  const {
    project,
    active,
    isLoading,
    updateAccountDeployedCode,
    isSavingCode
  } = useProject();

  const [setResult] = useSetExecutionResultsMutation();
  const [deployingContract, setDeployingContract] = useState(false);

  const deploy = async () => {
    if (
      project.accounts[active.index] &&
      project.accounts[active.index].deployedCode
    ) {
      if (
        !confirm("Redeploying will clear the state of all accounts. Proceed?")
      )
        return;
    }

    if (!deployingContract) {
      setDeployingContract(true);

      let rawResult;
      try {
        rawResult = await updateAccountDeployedCode();
      } catch (e) {
        rawResult = e.toString();
      }

      setDeployingContract(false);
      setResult({
        variables: {
          resultType: ResultType.Contract,
          rawResult,
          label: project.accounts[active.index].address
        }
      });
    }
  };

  return (
    <FeedbackRoot>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AccountState
            state={project.accounts[active.index].state}
            renderDeployButton={() => {
              return (
                <FeedbackActions>
                  <Button
                    onClick={deploy}
                    disabled={isSavingCode || deployingContract}
                    isLoading={deployingContract}
                    Icon={FaArrowCircleRight}
                  >
                    {project.accounts[active.index].deployedCode
                      ? "Redeploy"
                      : "Deploy"}
                  </Button>
                </FeedbackActions>
              );
            }}
          />
        </>
      )}
    </FeedbackRoot>
  );
};

export default AccountBottomBar;
