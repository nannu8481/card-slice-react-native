import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
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
      <View style={styles.card}>
        <Text style={styles.numberNameText}>{cardData?.cardNumber}</Text>
        <Image
          source={{uri: `data:image/png;base64,${cardData?.logo}`}}
          style={styles.logo}
        />
        <Text style={styles.numberNameText}>{cardData?.userName}</Text>
      </View>
      <View style={styles.formConatiner}>
        <View style={styles.inputContainer}>
          <Text>Enter number</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={value => {
              setCardData({...cardData, cardNumber: value});
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Enter name</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={value => {
              setCardData({...cardData, userName: value});
            }}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={selectLogo} style={styles.addLogoButton}>
          <Text>Add Logo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('editCard', cardData);
          }}
          style={styles.nextButton}>
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
  card: {
    backgroundColor: 'grey',
    height: 200,
    width: '80%',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  logo: {
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
  },
  numberNameText: {
    fontSize: 14,
  },
  formConatiner: {
    padding: 30,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 40,
    width: '90%',
    height: '50%',
    paddingBottom: 40,
  },
  inputContainer: {
    height: '35%',
  },
  input: {
    borderWidth: 1,
    height: '50%',
    width: '60%',
    borderRadius: 8,
    borderColor: '#948E8E',
    fontSize: 12,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  addLogoButton: {
    height: 40,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  nextButton: {
    height: 40,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 20,
  },
});
