/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';

export default class More extends Component<Props> {


    render() {
        return (
           <View>
                <ScrollView>
                    <View style={{marginTop:10,fontSize: 40}}>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                        <Text>哈哈</Text>
                        <Text >云音乐</Text>
                        <Text>哈哈</Text>
                        <Text>云音乐</Text>
                    </View>
                </ScrollView>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    navImageStyle:{
        position:'absolute',
        right:10,
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    navViewStyle:{
        backgroundColor:'rgba(255,96,0,1.0)',
        height:50,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});