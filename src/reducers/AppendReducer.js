/**
 * Created by mark on 16-11-1.
 */
import Rx from "rxjs";
import counterActions from "../actions/counterActions";

const initialState = "original text";

const AppendReducer$ = Rx.Observable.of(() => initialState)
    .merge(
        counterActions.append$.map(payload => state => {
            console.debug("append ===================");
            console.debug(state);
            console.debug(payload);
            return state.concat(payload);
        })
    );
export default AppendReducer$;