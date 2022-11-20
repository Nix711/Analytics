import { stat } from "fs";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../app/appState/types";
import { FetchUsers } from "../../app/sideEffects";

export type Props = ConnectedProps<typeof connector>;

const Users = (props: Props) => {
  const { fetchUsers, users } = props;

  const [text, setText] = useState("");

  return (
    <div>
      <div>
        cerca:
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(text);
            fetchUsers(text);
          }}
        >
          cerca
        </button>
      </div>
      utenti:
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  //
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: (text: string) => {
    dispatch(FetchUsers(text));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Users);
