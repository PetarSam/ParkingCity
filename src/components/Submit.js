import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

import BackgroundTask from 'react-native-background-task';
import SendSMS from 'react-native-sms-x';

var i = 0;
const Numbers = [700101, 700109, 700102, 700102, 700108, 700103];

BackgroundTask.define(data => {
  i < Number(data.hours)
    ? (SendSMS.send(123, Numbers[Number(data.zone)], data.table), i++)
    : null;
  BackgroundTask.finish();
});

const Submit = ({data}) => {
  return (
    <TouchableHighlight onPress={() => BackgroundTask.schedule(data)}>
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
