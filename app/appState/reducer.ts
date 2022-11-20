import AppState from "./state";
import { State, Action } from "./types";

const reducer = (currentState: State = AppState, action: Action): State => {
  if (!action.updateState) {
    return currentState;
  }

  const newState = action.updateState(currentState);

  return newState;
};

export default reducer;
