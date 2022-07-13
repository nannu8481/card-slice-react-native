import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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

const EditCard = ({navigation, route}) => {
  const dataPassFromPreviousScrn = route?.params;
  const [cardData, setCardData] = useState(dataPassFromPreviousScrn);

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
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            height: 40,
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
            marginTop: 20,
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
});
