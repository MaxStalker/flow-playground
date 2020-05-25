type Token = {
  foreground: string;
  token: string;
};

type ThemeTokens = Array<Token>;

type TokenColors = {
  [key: string]: string;
};

export const extractTokenColors = (tokens: ThemeTokens) =>
  tokens.reduce((acc: TokenColors, item: Token) => {
    acc[item.token] = item.foreground;
    return acc;
  }, {});
