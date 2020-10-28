import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert, ActivityIndicator } from 'react-native';

class App extends React.Component {

createTwoButtonAlert = () =>
   alert(
      "ALERT",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log('Cancel Pressed'),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text1}>Bonjour</Text>
          <Text style={styles.text2}>Hello </Text>
          <Text style={styles.text3}>Hola</Text>

          <Image source={require('./assets/konexio-logo_1.png')}
            style={{ width: 100, height: 30, marginBottom: 20, marginTop: 40 }} />
          <Image
            source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
            style={{ width: 100, height: 30, marginBottom: 40 }} />
       
            <Button
              title="Button"
              color="black"
              accessibilityLabel="Learn more about this purple button"
              onPress={this.createTwoButtonAlert}
            />
      


          <Text style={{ marginLeft: 20, marginRight: 20, marginTop: 40 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <ActivityIndicator size="small" color="#0AA2FF" style={{ marginTop: 40 }} />

        </View>
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 20,
    marginTop: 50,
    //lineHeight: 80
  },
  text2: {
    textAlign: 'center',
    //lineHeight: 80
  },
  text3: {
    fontWeight: 'bold',
    //lineHeight: 80
  }
});
