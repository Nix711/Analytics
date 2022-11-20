import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../app/appState/types";
import { FetchPadiglioni } from "../../app/sideEffects/padiglione";

type Props = ConnectedProps<typeof connector>;
const Padiglioni = (props: Props) => {
    useEffect(() => {
        props.fetchpadiglioni();
    }, []);
    return (
        <div>Padiglioni:
            <div>
                {props.padiglioni.map(padiglione => {
                    return (
                        <p key={padiglione.id}><a href={"/padiglioni/" + padiglione.id}>{padiglione.name}</a></p>
                    )
                })}
            </div>
        </div>

    )
}

const mapStateToProps = (state: State) => {
    //
    return {
        padiglioni: state.padiglioni,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchpadiglioni: () => {
        dispatch(FetchPadiglioni());
    },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Padiglioni);
