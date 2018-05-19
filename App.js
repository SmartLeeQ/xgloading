/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NativeModules } from 'react-native';
//获取原生封装的类
var manager = NativeModules.XGNativeLodingModule;
//使用对象调用方法

export default class App extends Component{
  constructor(props){
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    manager.showLoading();
  }
  hide() {
    manager.hideLoading();
  }
  render() {
    return (
      <View style={styles.container}>
          <Button onPress ={this.show} title="显示"></Button>
          <Button onPress ={this.hide} title="隐藏"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
