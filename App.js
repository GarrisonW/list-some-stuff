import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppBar/>
      <FlatList
        data={[{key: 'a', name: 'Fred'},
               {key: 'b', name: 'Scooby'},
               {key: 'c', name: 'Daphnie'},
               {key: 'd', name: 'Shaggy'},
               {key: 'e', name: 'Ghost'},
               {key: 'f', name: 'Velma'}]
             }
        renderItem={({item}) => <View style={{height: 100}}>
                                    <Text style={styles.bigblue}>{item.name}</Text>
                                </View>}
      />
    </View>
    );
  }
}

class AppBar extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>home</Text>
        <Text style={styles.appbar}>THIS IS THE APP BAR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'red'
  },
  appbar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'blue'
  },
  redText: {
    color: 'red',
  },
});
