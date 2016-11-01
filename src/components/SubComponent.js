/**
 * Created by mark on 16-11-1.
 */
import React, {Component, PropTypes} from "react";
import counterActions from "../actions/counterActions";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";


export default class SubComponent extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.iterate.first}</Text>
                <Text>{this.props.iterate.second}</Text>


                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text>iterate</Text>
                </TouchableOpacity>
            </View>
        );
    };

    _onPress() {
        counterActions.iterate$.next({
            first: this.props.first,
            second: this.props.second,
        });
    }
}