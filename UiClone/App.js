/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './routes';

import Login from './src/components/home/index'
import Main from './src/components/main/index'

const App = () => {
  return (
    <>
      <Text>Trabalho React Native - UI Clone // Android Google Pixel 2 9.0</Text>
      <Routes />
    </>
  );
};

//const styles = StyleSheet.create({});

export default App;