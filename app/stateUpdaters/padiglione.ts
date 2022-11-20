import { Action, Padiglione, State } from "../appState/types";

export const SetPadiglione = (newPadiglione: Padiglione): Action => ({
    type: "SetPadiglione",
    updateState: (state: State): State => ({
        ...state,
        padiglione: newPadiglione,
    }),
});