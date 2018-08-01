import React, { Component } from 'react';
import { StyleSheet , View } from 'react-native';

export default class NoMoreCards extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.noMoreCards}>
          <Text>No more cards</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10
    },
    noMoreCards: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })