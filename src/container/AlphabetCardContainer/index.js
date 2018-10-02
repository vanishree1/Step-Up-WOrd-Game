import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AlphabetCardComponent from "../../components/AlphaberCardComponent";

export default class AlphabetCardContainer extends React.Component {
  render() {
    return (
      <ScrollView 
        style={styles.container} 
        directionalLockEnabled={false}
    >
        <ScrollView horizontal={true}>
            <View>
                <AlphabetCardComponent />
                <AlphabetCardComponent />
                <AlphabetCardComponent />
            </View>
            <View>
                <AlphabetCardComponent />
                <AlphabetCardComponent />
                <AlphabetCardComponent />
            </View>
            <View>
                <AlphabetCardComponent />
                <AlphabetCardComponent />
                <AlphabetCardComponent />
            </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      width: '100%',
      flex: 1,
      position: 'absolute',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  });