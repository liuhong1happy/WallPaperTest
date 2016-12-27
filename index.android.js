/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import WallPaperManager from 'react-native-wallpaper-manager';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class WallPaperTest extends Component {
  handlePress(){
    const uri = "http://img5.duitang.com/uploads/item/201407/27/20140727022113_A38zf.jpeg";
    Alert.alert("提示","你当前要设置的图片路径为"+uri);
    WallPaperManager.setWallpaper({uri},function(res){
      console.log(res);
      if(res.status){
        Alert.alert("提示","设置壁纸成功");
      }else{
        Alert.alert("提示","设置壁纸失败");
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.welcome}>
          <View>
            <Text>设置壁纸</Text>
          </View>
        </TouchableOpacity>
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
    backgroundColor: "red"
  }
});

AppRegistry.registerComponent('WallPaperTest', () => WallPaperTest);
