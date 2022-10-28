import React, { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {connect} from 'react-redux';
import { setUser } from "../../store/action";
 
const LoginScreen = ({navigation, currentUser, userDetails, setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    const isUser = userDetails.filter(user => user.email === email);
    if (isUser && isUser.length) {
      if (isUser[0].password === password) {
        setUser(isUser[0]);
        navigation.navigate('Home');
      } else {
        Alert.alert('Wrong Password');
      }
    } else {
      Alert.alert('User not found');
    }
  };
 
  return (
    
    <View style={styles.container}>
      <Image style={styles.image} source= {{uri: 'https://microsites-websitebuilder.s3.amazonaws.com/images/rishabhbus.com_popup_1592910268.jpg'}} />
 
     
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View> 
 
       <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
       style={styles.loginBtn}
       onPress={() =>{Submit(); }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> 
      <View>
      <TouchableOpacity 
       style={styles.registrationBtn}
       onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity> 
      </View>
    </View>
    
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width:290,
    height:260,
    marginTop:-40
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
  
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
   fontWeight:'bold',
   
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontWeight:'bold',
  },
 
  loginBtn: {
    width: "37%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
    paddingHorizontal:50,
    marginRight:140
  },
  registrationBtn:{
    paddingTop: 15,
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    marginTop: -50,
    backgroundColor: "#FF1493",
    paddingHorizontal:50,
    marginLeft:190,
   
    
  }
});


const mapStateToProps = state => ({
  currentUser: state.app.currentUser,
  userDetails: state.app.userDetails,
});

const mapDispatchToProps = {setUser};


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);