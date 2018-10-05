import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AlphabetCardComponent extends React.Component {
  render() {
    const { alphabetRange } = this.props;
    return (
      <View style={styles.cardComp}>
        <Text style={styles.content}> {alphabetRange} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    cardComp: {
      height: 250,
      width: 160,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 5,
      opacity: 0.7,
      borderColor: '#fff',
      borderWidth: 1,
      margin: 15
    },
    content : {
      color: "#fff",
      fontSize: 25
    }
  });