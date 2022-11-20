import { SetUsers } from "../stateUpdaters";
import { SetPadiglione, SetPadiglioni } from "../stateUpdaters/padiglione";

export const FetchPadiglione = (id: string) => async (dispatch: any) => {
    // const response = await fetch("https://api.github.com/search/users?q=" + text);
    // const json = await response.json();
    console.log(id);
    // console.log(json);
    if (id == "SwissId") {
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
    } else if (id == "VinophilaId") {
        dispatch(
            SetPadiglione(
                {
                    id: "ciao", name: "Vinophila", views: 1000, daysChart: [
                        { name: "Lunedi", views: 330 },
                        { name: "Martedi", views: 200 },
                        { name: "Mercoledi", views: 1000 },
                        { name: "Giovedi", views: 400 },
                        { name: "Venerdi", views: 500 },
                        { name: "Sabato", views: 600 },
                        { name: "Domenica", views: 700 },
                    ]
                }
            )
        );
    }

};
export const FetchPadiglioni = () => async (dispatch: any) => {
    // const response = await fetch("https://api.github.com/search/users?q=" + text);
    // const json = await response.json();

    // console.log(json);
    dispatch(
        SetPadiglioni(
            [
                {
                    id: "SwissId",
                    name: "Swiss",
                },
                {
                    id: "VinophilaId",
                    name: "Vinophila",
                }
            ]
        )
    );

};