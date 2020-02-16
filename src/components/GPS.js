import React, {useEffect, useState} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import Modal from 'react-native-modal';

const GPS = ({visible}) => {
  const [sucess, setSucess] = useState(false);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setSucess(true);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return (
    <Modal isVisible={sucess ? !sucess : visible}>
      <ActivityIndicator />
      <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>
        Searching for the zone...
      </Text>
    </Modal>
  );
};

export default GPS;
