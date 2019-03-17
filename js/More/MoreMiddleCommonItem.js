import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, StatusBar} from 'react-native';

export default class MoreMiddleCommonItem extends Component<Props> {

    renderAllItem() {
        var images = [require('../../res/images/order1.png'), require('../../res/images/order2.png'), require('../../res/images/order3.png'), require('../../res/images/order4.png')];
        var middleData = ["待付款", "待使用", "待评价", "退款/售后"];
        var itemArr = [];
        for (var i = 0; i < 4; i++) {
            itemArr.push(<InnerView key={i} iconName={images[i]} title={middleData[i]}/>)
        }
        return itemArr
    }

    render() {
        return (
            <View style={styles.containStyle}>
                {this.renderAllItem()}
            </View>
        )
    }

}

class InnerView extends Component<Props> {
    static defaultProps = {
        iconName: undefined,
        title: ''
    }

    render(): React.ReactNode {
        return (<View style={{alignItems: 'center'}}>
            <Image source={this.props.iconName} style={{width: 30, height: 30}}/>
            <Text>{this.props.title}</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    containStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20
    }
})