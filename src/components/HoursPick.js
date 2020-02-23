import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RNNumberSelector} from 'react-native-number-selector';

const HoursPick = ({setHours}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View>
      <RNNumberSelector
        style={styles.selector}
        items={items}
        selectedItem={1}
        spacing={50}
        highlightedFontSize={25}
        fontSize={20}
        textColor={'#ccc'}
        highlightedTextColor={'#fff'}
        viewAnimation={0}
        onChange={number => {
          setHours(number);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    width: '100%',
    height: 60,
    marginTop: 30,
  },
});
export default HoursPick;
