import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

const Submit = () => {
  return (
    <TouchableHighlight onPress={() => console.log('click')}>
      <Text style={styles.base}>Pay</Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  base: {
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    padding: '3%',
    fontSize: 28,
    color: 'steelblue',
  },
});

export default Submit;
