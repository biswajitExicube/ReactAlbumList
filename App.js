/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /*
  // Import a library to help create a component:

    import React from 'react';
    import ReactNative from 'react-native';

  // create a component:

    const App = () => {
      return (
        <Text>Some Text</Text>
      )
    }

  // Render it to the device:

    ReactNative.AppRegistry.registerComponent('albums', () => App);
    
    // atlest one component is register to reactNative similar of project name


 */

 // start this in 1st
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/component/header';
import { AlbumList } from './src/component/AlbumList';
//import { AlbumDetail } from './src/component/albumDetail';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>      
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

//AppRegistry.registerComponent('albums', () => App);

// start this in 1st
/*import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';*/

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

/*export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
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
});*/
