/**
 * Created by mark on 16-11-1.
 */
import Rx from "rxjs";
import counterActions from "../actions/counterActions";

const initialState = {first: 2000, second: 30000};

const CounterReducer$ = Rx.Observable.of(() => initialState)
    .merge(
        counterActions.iterate$.map(payload => state => {

            if (!payload) {
                return state;
            } else {
                return {
                    first: state.first * 2 + state.second,
                    second: state.first + state.second * 2,
                }
            }
        }),
    );
export default CounterReducer$;