import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Logo from './src/components/Logo';
import TableNumber from './src/components/TableNumber';
import Zones from './src/components/Zones';
import HoursPick from './src/components/HoursPick';
import Submit from './src/components/Submit';

const App = () => {
  const [table, setTable] = useState('');
  const [zones, setZones] = useState('');
  const [hours, setHours] = useState('');

  return (
    <View style={styles.main}>
      <Logo />
      <TableNumber setTable={setTable} />
      <Zones setZones={setZones} />
      <HoursPick setHours={setHours} />
      <Submit data={{table, zones, hours}} />
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
