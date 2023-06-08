import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Rotas from './components/navbar/rotas';
import * as NavigationBar from 'expo-navigation-bar';
NavigationBar.setBackgroundColorAsync("white");
export default function App() {
  return (
    <>
    <Rotas></Rotas>
    </>
  );
}