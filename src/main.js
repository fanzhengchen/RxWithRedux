/**
 * Created by mark on 16-10-31.
 */
import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {RxStateProvider, createState} from "./state/RxState";
import App from "./components/App";
import reducer$ from "./reducers";


export default class MainComponent extends Component {
    render() {
        return (
            <RxStateProvider state$={createState(reducer$)}>
                <App/>
            </RxStateProvider>

        );
    }
}
