/**
 * Created by mark on 16-10-31.
 */
import Rx from "rxjs";
import counterActions from "../actions/counterActions";

const initialState = 0;

const CounterReducer$ = Rx.Observable.of(() => initialState)
    .merge(
        counterActions.increment$.map(payload => state => state + payload)
    );
console.log('======================');
console.log(CounterReducer$);
export default CounterReducer$;
