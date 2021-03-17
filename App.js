import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title={'Todo App'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     flexDirection: 'row',
//     // height: 300,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//    text: {
//      color: '#ddd',
//      fontSize: 24
//    }
// });
