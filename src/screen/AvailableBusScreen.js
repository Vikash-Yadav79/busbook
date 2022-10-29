import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BusData from '../constant/BusData';
import ModalScreen from './ModalScreen';
import {connect} from 'react-redux';
import {useEffect} from 'react';

const AvailbleBusScreen = props => {
  const data = props.route.params.availablity;
  const [selectedBusDetails, setSelectedBusDetails] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [availableBus, setAvailableBuses] = useState(
    BusData.filter(
      bus => bus.source === data.source && bus.destination === data.destination,
    ),
  );

  useEffect(() => {
    const filterDetails = availableBus.map(bus => {
      const busDetails =
        (props.bookingDetails.length &&
          props.bookingDetails.filter(
            detail =>
              bus.busName === detail.busDetails.busName &&
              detail.busDetails.busNumber === bus.busNumber,
          )) ||
        [];
      const number =
        (busDetails.length &&
          busDetails.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.seats),
            0,
          )) ||
        0;

      return {...bus, seatLength: 30 - number};
    });
    setAvailableBuses([...filterDetails]);
  }, [props.bookingDetails]);

  return (
    <>
      <View>
        {availableBus.map(bus => (
          <TouchableOpacity
            style={[styles.item, styles.big]}
            onPress={() => {
              setShowModal(true);
              setSelectedBusDetails({...bus});
            }}>
            <Text style={styles.text}>{bus.busName}</Text>
            <Text style={styles.subtext}>{bus.time}</Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Available seat
            </Text>
            <Text style={styles.subtext}>{bus.seatLength}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {showModal ? (
        <ModalScreen
          selectedBusDetails={selectedBusDetails}
          setShowModal={setShowModal}
        />
      ) : null}
    </>
  );
};

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

const mapStateToProps = state => ({
  bookingDetails: state.app.bookingDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AvailbleBusScreen);
