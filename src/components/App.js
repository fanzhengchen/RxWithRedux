/**
 * Created by mark on 16-10-31.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from "../state/RxState";
import counterActions from "../actions/counterActions";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

class App extends Component {


    static PropTypes = {
        counter: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        console.debug("App props *****************\n");
        console.debug(props);
    }

    render() {
        return (
            <View>
                <Text>
                    'a'{+this.props.counter}
                </Text>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text>Fuck</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onPress() {
        this.props.increment(1);
    }
}


export default connect(state => {
    console.debug("connect state $$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(state);
    return ({
        counter: state.counter,
        increment(n) {
            counterActions.increment$.next(n);
        },
    })
})
(App);

