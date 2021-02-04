import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View } from 'react-native';
import Home from './src/components/Home';
import { Provider } from 'react-redux';
import store from './src/Store/configureStore';

export default function App() {
  return (
    <Provider store={ store }>
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
