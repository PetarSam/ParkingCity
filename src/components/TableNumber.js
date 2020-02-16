import React, {useState, useEffect} from 'react';
import {TextInput, View, StyleSheet, AsyncStorage} from 'react-native';

const TableNumber = () => {
  const [val, setVal] = useState();
  const [newVal, setNewVal] = useState();

  useEffect(() => {
    _retrieveData();
    setNewVal(val);
  }, [val]);

  const _storeData = async reg => {
    setNewVal(reg);
    try {
      await AsyncStorage.setItem('@reg:key', reg);
    } catch (error) {
      console.log(error);
    }
  };
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@reg:key');
      if (value !== null) {
        setVal(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="ZG1234XY"
        onChangeText={e => _storeData(e)}
        value={newVal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    fontSize: 25,
    marginTop: 30,
  },
});
export default TableNumber;
