import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <FlatList
        data={[{key: 'a', name: 'Fred'},
               {key: 'b', name: 'Scooby'},
               {key: 'c', name: 'Daphnie'},
               {key: 'd', name: 'Shaggy'},
               {key: 'e', name: 'Ghost'},
               {key: 'f', name: 'Velma'}]
             }
        renderItem={({item}) => <View style={{height: 100}}>
                                    <Text style={styles.red}>{item.key}</Text>
                                    <Text style={styles.bigblue}>{item.name}</Text>
                                </View>}
      />
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
  redText: {
    color: 'red',
  },
});
