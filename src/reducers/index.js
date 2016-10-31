/**
 * Created by mark on 16-10-31.
 */
import Rx from "rxjs";
import CounterReducer$ from "../reducers/CounterReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
);

export default reducer$;