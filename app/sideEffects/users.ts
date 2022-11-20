import { SetUsers } from "../stateUpdaters";

export const FetchUsers = (text: string) => async (dispatch: any) => {
  // const response = await fetch("https://api.github.com/search/users?q=" + text);
  // const json = await response.json();

  // console.log(json);
  dispatch(
    SetUsers([
      { id: "ciao", name: "ciao" },
      { id: "ciao2", name: "ciao2" },
    ])
  );
};
