import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <FlatList
        data={[{key: 'a', name: 'Fred'}, {key: 'b', name: 'Velma'}]}
        renderItem={({item}) => <View>
                                    <Text>{item.key}</Text>
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
  },
  red: {
    color: 'red',
  },
});
