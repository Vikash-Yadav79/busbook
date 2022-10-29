import React,{useState,useEffect} from "react";
import { View, Text, Button } from "react-native";
import {connect} from 'react-redux';
import { deleteBookingDetail } from "../../store/action";

const BookingDetail = (props) => {
    const [bookingDetails, setBookingDetails] = useState([]);
    useEffect(() => {
        if (props.bookingDetails && props.bookingDetails.length) {
            const details = (props.bookingDetails.length && props.bookingDetails.filter((detail) => detail.userId === props.currentUser.id)) || [];
            setBookingDetails([...details]);
        }
    }, [props.bookingDetails])
  return (
     <View>
      {bookingDetails.length ? (
        bookingDetails.map((detail) => {
            return(<>
            <Text> Booking ID : {detail.bookingId}</Text>
            <Text> BusName : {detail.busDetails.busName}</Text>
            <Text>No.of seats: {detail.seats}</Text>
            <Text>Email Id: {detail.email}</Text>
            <Text>phone number: {detail.phoneNumber }</Text>
            <Text>Age: {detail.age}</Text>
            <Text>Gender: {detail.gender}</Text>
            <Button onPress={() => props.deleteBookingDetail(detail.bookingId)} title = "Delete Booking"/>
        </>)
        })
      ): <Text stytle ={{fontSize:20,color:'black'}}>No Bookings</Text>}
     </View>
  )
}


const mapStateToProps = state => ({
    currentUser: state.app.currentUser,
    bookingDetails: state.app.bookingDetails,
  });
  
const mapDispatchToProps = {deleteBookingDetail};


export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);