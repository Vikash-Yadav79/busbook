import React, {useState}from 'react';

import {
  Button,
  ScrollView,
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import { setBookingDetails } from '../../store/action';




const  ModalScreen  = (props)=> {

  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({email:'', gender:'', phoneNumber: '', age: '', seats: '' })

const submitHandler = ()=>{
  const data = {
    bookingId: Math.random().toString(36).slice(2, 7),
    ...form,
    busDetails: {...props.selectedBusDetails},
    userId: props.currentUser.id,
  }
  props.setBookingDetails({...data});
}
  

    return (
      <Modal transparent={true} visible={this.show}>
        <View style={[styles.container]} />
        <View
          style={[
            styles.modal,
            {
              top: showSuccess ? '30%' : '10%',
              bottom: showSuccess ? '30%' : '10%',
            },
          ]}>
          {showSuccess ? (
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 24, marginBottom: 30}}>Successs !</Text>
              <Button
                title="Okay"
                onPress={() => {
                  props.setShowModal(false);
                }}
              />
            </View>
          ) : (
            <View>
              <ScrollView>
                <TextInput
                  style={styles.form}
                  placeholder="number of seat"
                  onChangeText={(seats) => setForm({...form, seats, })}
                 
                />
                <TextInput
                
                  style={styles.form}
                  placeholder="Enter Email"
                  onChangeText={(email) => setForm({...form, email})}
                  
                />
                <TextInput
                  style={styles.form}
                  placeholder="phone number"
                  onChangeText={(phoneNumber) => setForm({...form, phoneNumber})}
                />
                <TextInput
                  style={styles.form}
                  placeholder=" enter Age"
                  onChangeText={(age) => setForm({...form,  age})}
                />
                <TextInput
                  style={styles.form}
                  placeholder=" Enter Gender"
                  onChangeText={(gender) => setForm({...form,  gender})}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Button
                    title="Cancel Ticket"
                    onPress={() => {
                      props.setShowModal(false);
                    }}
                  />

                  <Button
                    title="Book Ticket"
                    onPress={() => { 
                      submitHandler()
                      setShowSuccess(true);
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </Modal>
    );
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modal: {
    position: 'absolute',
    left: 20,
    right: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 16,
  },
  form: {
    borderWidth: 2,
    margin: 20,
    color: 'blue',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 20,
    borderColor: 'red',
  },
});

const mapStateToProps = state => ({
  currentUser: state.app.currentUser,
  bookingDetails: state.app.bookingDetails,
});

const mapDispatchToProps = {setBookingDetails};


export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);
