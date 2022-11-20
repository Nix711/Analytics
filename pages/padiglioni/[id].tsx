import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { State } from '../../app/appState/types'
import { FetchPadiglione } from '../../app/sideEffects/padiglione'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export type Props = ConnectedProps<typeof connector>;

const Padiglione = (props: Props) => {
    const { fetchpadiglione, padiglione } = props;

    const router = useRouter()
    const { id } = router.query
    console.log(padiglione);
    useEffect(() => {

        fetchpadiglione(id?.toString() ?? "");

    }, []);
    if (!padiglione) {
        return (<div>Loading</div>)
    }
    return (
        <div> Grafici:
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={padiglione.daysChart}>
                    <Bar dataKey="views" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}



const mapStateToProps = (state: State) => {
    //
    return {
        padiglione: state.padiglione,
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchpadiglione: (id: string) => {
        dispatch(FetchPadiglione(id));
    },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Padiglione);


