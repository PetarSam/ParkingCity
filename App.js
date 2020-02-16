import React from 'react';
import {View, StyleSheet} from 'react-native';

import Logo from './src/components/Logo';
import TableNumber from './src/components/TableNumber';
import Zones from './src/components/Zones';
import HoursPick from './src/components/HoursPick';
import Submit from './src/components/Submit';

const App = () => {
  return (
    <View style={styles.main}>
      <Logo />
      <TableNumber />
      <Zones />
      <HoursPick />
      <Submit />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'steelblue',
    flex: 1,
    padding: 60,
    display: 'flex',
    justifyContent: 'space-between',
  },
});
export default App;
