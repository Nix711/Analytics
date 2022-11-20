export type User = {
  id: string;
  name: string;
};

export type State = {
  users: User[];
  loadingIds: string[];
};

export type GetState = () => State;

export type Action = {
  readonly type: string;
  readonly log?: string;
  readonly enableDataLog?: boolean;
  readonly updateState: (state: State) => State;
};
