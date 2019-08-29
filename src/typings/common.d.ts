interface IHistory {
  push: (route: string) => void;
  replace?: (route: string) => void;
  go?: (n: number) => void;
  goBack?: () => void;
  location?: { pathname: string };
}
