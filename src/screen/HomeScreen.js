import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function HomeScreen(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [checkAvailablity, setCheckAvailablity] = useState({
    source: '',
    destination: '',
    date: '',
  });

  useEffect(() => {
    props.route.params.setAvailablity(checkAvailablity);
  }, [checkAvailablity]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setCheckAvailablity({...checkAvailablity, date: date}),
      props.route.params.setAvailablity(checkAvailablity);
    hideDatePicker();
  };

  const categories = [
    {key: 1, value: 'Kolkata'},
    {key: 2, value: 'Delhi'},
    {key: 3, value: 'Pune'},
    {key: 4, value: 'Varanasi'},
    {key: 5, value: 'Banglore'},
    {key: 6, value: 'Hyderabad'},
  ];

  const subcategories = [
    {key: 1, value: 'Kolkata'},
    {key: 2, value: 'Delhi'},
    {key: 3, value: 'Pune'},
    {key: 4, value: 'Varanasi'},
    {key: 5, value: 'Banglore'},
    {key: 6, value: 'Hyderabad'},
  ];

  return (
    <>
      <View style={{marginTop: 60, paddingHorizontal: 80}}>
        <Button
          onPress={() => props.navigation.navigate('BookingDetail')}
          title="BookingDetails"></Button>
      </View>
      <View style={{paddingHorizontal: 30, paddingTop: 60}}>
        <SelectList
          setSelected={data =>
            setCheckAvailablity({
              ...checkAvailablity,
              source: categories.find(x => x.key === data)?.value,
            })
          }
          boxStyles={{borderColor: 'red'}}
          data={categories}
          placeholder={'To'}
          defaultOption={{key: '1', value: 'from'}}
        />

        <SelectList
          setSelected={data =>
            setCheckAvailablity({
              ...checkAvailablity,
              destination: subcategories.find(x => x.key === data)?.value,
            })
          }
          boxStyles={{marginTop: 30, borderColor: 'red'}}
          data={subcategories}
          placeholder={'Select categories'}
          defaultOption={{key: '1', value: 'To'}}
        />
      </View>

      <View style={styles.mainView}>
        <Button title="selectDate" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={{marginTop: 60, paddingHorizontal: 80}}>
        <Button
          onPress={() => props.navigation.navigate('AvailableBus')}
          title="Search"></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifycontent: 'center',
    marginTop: 30,
    borderRadius: 40,
  },
});
