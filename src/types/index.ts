export interface IRoutesItem {
  path: string;
  component: (props: Record<string, any>) => JSX.Element;
}
