import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// Import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
} from 'react-native';

const AddCard = props => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    logo: '',
    userName: '',
  });

  const selectLogo = () => {
    const options = {
      mediaType: 'image',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      setCardData({
        ...cardData,
        logo: response?.assets && response?.assets[0]?.base64,
      });
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'grey',
          height: 200,
          width: '80%',
          borderRadius: 20,
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 14}}>{cardData?.cardNumber}</Text>
        <Image
          source={{uri: `data:image/png;base64,${cardData?.logo}`}}
          style={{
            height: 60,
            width: 60,
            alignSelf: 'flex-end',
          }}></Image>
        <Text style={{fontSize: 14}}>{cardData?.userName}</Text>
      </View>
      <View
        style={{
          padding: 30,
          borderWidth: 1,
          borderColor: 'grey',
          marginTop: 40,
          width: '90%',
          height: '50%',
          paddingBottom: 40,
        }}>
        <View style={{height: '35%'}}>
          <Text>Enter number</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={value => {
              setCardData({...cardData, cardNumber: value});
            }}
            style={{
              borderWidth: 1,
              height: '50%',
              width: '60%',
              borderRadius: 8,
              borderColor: '#948E8E',
              fontSize: 12,
              paddingHorizontal: 10,
              marginTop: 5,
            }}></TextInput>
        </View>
        <View style={{height: '35%'}}>
          <Text>Enter name</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={value => {
              setCardData({...cardData, userName: value});
            }}
            style={{
              borderWidth: 1,
              height: '50%',
              width: '60%',
              borderRadius: 8,
              borderColor: '#948E8E',
              fontSize: 12,
              paddingHorizontal: 10,
              marginTop: 5,
            }}></TextInput>
        </View>
        {/* <View>
          <Text>Enter Name</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={value => {}}
            style={{
              borderWidth: 1,
              height: '35%',
              width: '60%',
              borderRadius: 8,
              borderColor: '#948E8E',
              fontSize: 12,
              paddingHorizontal: 10,
              marginTop: 5,
            }}></TextInput>
        </View> */}
        <TouchableOpacity
          onPress={selectLogo}
          style={{
            height: 40,
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
          }}>
          <Text>Add Logo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('editCard', cardData);
          }}
          style={{
            height: 40,
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
            marginTop: 20,
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
});
