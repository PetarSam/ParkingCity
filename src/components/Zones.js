import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const Zones = ({setZones}) => {
  const [zone, setZone] = useState('0');
  return (
    <View style={styles.zones}>
      <Picker
        selectedValue={zone}
        style={styles.picker}
        itemStyle={styles.item}
        onValueChange={itemValue => {
          setZone(itemValue);
          setZones(itemValue);
        }}>
        <Picker.Item label="I.Zone" value="0" />
        <Picker.Item label="I.1 Zone" value="1" />
        <Picker.Item label="III. Zone" value="2" />
        <Picker.Item label="III. Zone Sesvete" value="3" />
        <Picker.Item label="IV.1 Zone" value="4" />
        <Picker.Item label="IV.2 Zone" value="5" />
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  zones: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  picker: {
    width: '100%',
    height: 210,
  },
  item: {
    color: 'white',
    fontSize: 28,
  },
  image: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginLeft: 10,
  },
});

export default Zones;
