/**
 * Created by mark on 16-10-31.
 */
import React, {Component, propTypes} from 'react';
import {connect} from "../state/RxState";
import counterActions from "../actions/counterActions";
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class App extends Component {


    render() {
        return (
            <View>
                <Text>
                    {this.props.count}
                </Text>
            </View>
        );
    }
}

export default connect(state => ({
    count: state.count,
}))(App);

