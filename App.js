import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

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
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <View style={{flexDirection: 'row', height: 100}}>
                                      <Image
                                        source={{uri: item.posters.thumbnail}}
                                        style={styles.thumbnail}/>
                                      <View style={styles.content}>
                                        <View style={{flexDirection: 'row'}}>
                                          <Text style={styles.titleText}>{item.title}</Text>
                                          <Text style={styles.yearText}>({item.year})</Text>
                                        </View>
                                        <Text style={styles.medText}>Critics : {item.ratings.critics_rating}</Text>
                                        <Text style={styles.medText}>Audience: {item.ratings.audience_rating}</Text>
                                      </View>
                                  </View>}
        />
      </View>
    );
  }
}

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <Text>THIS IS THE APP BAR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'teal',
    height: 44
  },
  medText: {
    marginLeft: 8,
    color: 'blue',
  },
  yearText: {
    color: 'blue',
    fontSize: 8,
    marginTop: 8,
    marginLeft: 8,
  },
  thumbnail: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16,
    width: 53,
    height: 81,
  },
  content: {
    flexDirection: 'column'
  }
});
