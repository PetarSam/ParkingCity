import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.top}>
      <Image
        alt="logo"
        source={require('../static/logo.png')}
        style={styles.img}
      />
      <Text style={styles.title}>ParkingCity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginTop: 5,
  },
  img: {
    width: 150,
    height: 150,
  },
});
export default Logo;
