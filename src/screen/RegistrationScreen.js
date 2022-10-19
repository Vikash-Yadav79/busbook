import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function RegistrationScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.dribbble.com/users/2292250/screenshots/6331913/39_booking_13_apr.png?compress=1&resize=768x576&vertical=top',
        }}
      />

      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="UserName"
            placeholderTextColor="#003f5c"
            onChangeText={UserName => setEmail(UserName)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
    width: 300,
    height: 240,
    marginTop: 40,
    marginLeft: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 90,
    width: '70%',
    height: 55,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },

  loginBtn: {
    width: '37%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});
