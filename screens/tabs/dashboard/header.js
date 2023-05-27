import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My TodoList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: '#007788',
  },
  title: {
    textAlign: 'center',
    color: '#f6f6f6',
    fontSize: 20,
    fontWeight: 'bold',
  }
});