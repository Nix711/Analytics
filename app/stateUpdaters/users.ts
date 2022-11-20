import { Action, State, User } from "../appState/types";

export const SetUsers = (newUsers: User[]): Action => ({
  type: "SetUsers",
  updateState: (state: State): State => ({
    ...state,
    users: newUsers,
  }),
});
