import React from 'react';
import {
    StyleSheet,
    Text
  } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class AlphabetDictionaryViewComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedTab : 'home'
      }
  }
  render() {
    console.log("tab navigator", TabNavigator)
    return (
        <TabNavigator style={styles.container} >
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="Home"
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <Text>Home</Text>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'profile'}
                title="Profile"
                onPress={() => this.setState({ selectedTab: 'profile' })}>
                <Text>Profile</Text>
            </TabNavigator.Item>
        </TabNavigator>
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
  });