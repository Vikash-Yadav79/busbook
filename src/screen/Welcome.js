import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <>
      <View
        style={{
          alignSelf: 'flex-end',
          borderRadius: 16,
          margin: 16,
        }}>
        <Button title="Logout" color={'red'} />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            marginHorizontal: 50,
            fontSize: 30,
            marginTop: 30,
          }}>
          Welcome to Red Bus
        </Text>
        <Text
          style={{
            marginHorizontal: 100,
            marginTop: 30,
            color: 'blue',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Hope you are well today
        </Text>
        <Image
          style={{width: '90%', height: 320, marginTop: 40, marginLeft: 20}}
          source={{
            uri: 'https://tannabus.in/tannatravelsagency/images/site/welcomebus01.png',
          }}
        />
        <View style={styles.screenContainer}>
          <Button
            title="Click here to Book"
            onPress={() => navigation.navigate('Login')}
            color="blue"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    borderRadius: 30,
    justifyContent: 'center',
    padding: 26,
    color: 'red',
  },
});
