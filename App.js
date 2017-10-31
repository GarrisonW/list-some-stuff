import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  //
  //  The folowing fetch code was havested from
  //  https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
  //  written by Spencer Carli
  //

  makeRemoteRequest = () => {
    this.setState({ loading: true });
    return fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
        .then(response => response.json())
        .then((responseData) => {
          this.setState({
            data: responseData.movies,
          });
        })
        .catch((error) => {
          console.error(error);
        });
  };

  render() {
    return (
      <View>
        <AppBar/>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <View style={{height: 100}}>
                                      <Text style={styles.bigblue}>{item.title}</Text>
                                  </View>}
            /*
            <ListItem
              roundAvatar
              title={item.name.last}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
            />
            */
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
