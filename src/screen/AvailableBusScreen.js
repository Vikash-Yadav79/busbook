import React, { useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BusData from '../constant/BusData';
import ModalScreen from './ModalScreen';

export default function AvailbleBusScreen(props) {
  const data = props.route.params.availablity;
  const [showModal, setShowModal] = useState(false);

  const availableBus = BusData.filter(
    bus => bus.source === data.source && bus.destination === data.destination,
  );

  return (
    <>
      <View>
        {availableBus.map(bus => (
          <TouchableOpacity
            style={[styles.item, styles.big]}
            onPress={() => setShowModal(true)}>
            <Text style={styles.text}>{bus.busName}</Text>
            <Text style={styles.subtext}>{bus.time}</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Available seat
            </Text>
            <Text style={styles.subtext}>
              {bus.seatLength -
                bus?.reservation
                  .filter(
                    b => b.date === data.date.toISOString().substring(0, 10),
                  )
                  .map(b => b.seatReserved)
                  .flat().length}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {showModal ? <ModalScreen setShowModal={setShowModal} /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    marginTop: 30,
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'red',
    justifyContent: 'center',

    padding: 35,
    height: 150,
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
  },
  subtext: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
    color: 'blue',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  big: {
    backgroundColor: '#EC7663',
  },
  button: {},
});
