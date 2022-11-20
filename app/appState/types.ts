export type TinyBarChart = {
  name: string;
  views: number;
}

export type Padiglione = {
  id: string;
  name: string;
  views: number;
  daysChart: TinyBarChart[];
}

export type User = {
  id: string;
  name: string;
};

export type State = {
  users: User[];
  loadingIds: string[];
  padiglione: Padiglione | undefined;
};

export type GetState = () => State;

export type Action = {
  readonly type: string;
  readonly log?: string;
  readonly enableDataLog?: boolean;
  readonly updateState: (state: State) => State;
};
