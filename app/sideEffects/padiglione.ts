import { SetUsers } from "../stateUpdaters";
import { SetPadiglione } from "../stateUpdaters/padiglione";

export const FetchPadiglione = (id: string) => async (dispatch: any) => {
    // const response = await fetch("https://api.github.com/search/users?q=" + text);
    // const json = await response.json();

    // console.log(json);
    dispatch(
        SetPadiglione(
            {
                id: "ciao", name: "Swiss", views: 1000, daysChart: [
                    { name: "Lunedi", views: 100 },
                    { name: "Martedi", views: 200 },
                    { name: "Mercoledi", views: 300 },
                    { name: "Giovedi", views: 400 },
                    { name: "Venerdi", views: 500 },
                    { name: "Sabato", views: 600 },
                    { name: "Domenica", views: 700 },
                ]
            }
        )
    );
};