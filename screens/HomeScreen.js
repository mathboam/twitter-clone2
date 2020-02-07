import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
  <View style={{backgroundColor:"#e57ace",
  flex:1,justifyContent:"center",alignItems:"center",}}>
    <Text style={{ color:"#ffff",fontSize:45}}>Hello world</Text>
  </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



