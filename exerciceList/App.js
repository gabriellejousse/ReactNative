import React from 'react';
import Countries from './components/Countries';
import { StyleSheet, Text, View,  Image, FlatList } from 'react-native';

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Countries></Countries>
      </View>
    );
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


