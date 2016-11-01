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

import SubComponent from './SubComponent';

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
                    '{this.props.counter}
                </Text>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text>Fuck</Text>
                </TouchableOpacity>

                <Text style={{width: 400}}>
                    {this.props.content}
                </Text>

                <TouchableOpacity onPress={this._onDouble.bind(this)}>
                    <Text>Double Text</Text>
                </TouchableOpacity>

                <SubComponent {...this.props}/>

            </View>
        );
    }

    _onPress() {
        counterActions.increment$.next(1);
    }

    _onDouble() {
        counterActions.append$.next(" [appended text]");
    }
}


export default connect(state => {
    console.debug("connect state $$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.debug(state);
    return ({
        counter: state.counter,
        content: state.content,
        iterate: state.iterate,
        // increment(n) {
        //     counterActions.increment$.next(n);
        // },
    })
})
(App);


const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
    },
});
