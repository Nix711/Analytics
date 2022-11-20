import { Action, State } from "../appState/types";

export const StartLoading = (id: string): Action => ({
  type: "StartLoading",
  updateState: (state: State): State => ({
    ...state,
    loadingIds: [...state.loadingIds, id],
  }),
});

export const StopLoading = (id: string): Action => ({
  type: "StopLoading",
  updateState: (state: State): State => ({
    ...state,
    loadingIds: state.loadingIds.filter((idA) => idA !== id),
  }),
});
