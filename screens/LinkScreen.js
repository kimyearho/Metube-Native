import React, { Component}  from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <>
        <ScrollView style={styles.container}>
          <Text>woooooooooo</Text>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
