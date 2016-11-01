/**
 * Created by mark on 16-10-31.
 */
import Rx from "rxjs";
import CounterReducer$ from "../reducers/CounterReducer";
import ApendReducer$ from  "../reducers/AppendReducer";
import PairReducer$ from "../reducers/PairReducer";
const reducer$ = Rx.Observable.merge(
    CounterReducer$.map(reducer => ["counter", reducer]),
    ApendReducer$.map(reducer => ["content", reducer]),
    PairReducer$.map(reducer => ["iterate", reducer]),
);

export default reducer$;