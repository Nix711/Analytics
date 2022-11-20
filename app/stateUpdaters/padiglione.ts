import { Action, InfoPadiglione, Padiglione, State } from "../appState/types";

export const SetPadiglione = (newPadiglione: Padiglione): Action => ({
    type: "SetPadiglione",
    updateState: (state: State): State => ({
        ...state,
        padiglione: newPadiglione,
    }),
});

export const SetPadiglioni = (newPadiglioni: InfoPadiglione[]): Action => ({
    type: "SetPadiglioni",
    updateState: (state: State): State => ({
        ...state,
        padiglioni: newPadiglioni,
        padiglione: undefined
    }),
});