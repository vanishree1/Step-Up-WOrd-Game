import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlphabetCardContainer from "./src/container/AlphabetCardContainer";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AlphabetCardContainer />
      </View>
    );
  }
}

