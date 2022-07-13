import React, {useEffect, useState} from 'react';
import {ColorPicker} from 'react-native-color-picker';
import SelectDropdown from 'react-native-select-dropdown';
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
  const [cardBackground, setCardBackground] = useState('grey');
  const [logoPostion, setLogoPostion] = useState('flex-end');
  const [textColor, setTextColor] = useState('black');
  const position = ['center', 'flex-end', 'flex-start'];

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: cardBackground,
          height: 200,
          width: '80%',
          borderRadius: 20,
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 14, color: textColor}}>
          {cardData?.cardNumber}
        </Text>
        <Image
          source={{uri: `data:image/png;base64,${cardData?.logo}`}}
          style={{
            height: 60,
            width: 60,
            alignSelf: logoPostion,
          }}></Image>
        <Text style={{fontSize: 14, color: textColor}}>
          {cardData?.userName}
        </Text>
      </View>
      <View
        style={{
          padding: 30,
          borderWidth: 1,
          borderColor: 'grey',
          marginTop: 40,
          width: '90%',
          height: '55%',
          paddingBottom: 40,
        }}>
        <View>
          <Text>Change card background</Text>
          <ColorPicker
            hideControls={true}
            hideSliders={true}
            onColorSelected={color => setCardBackground(color)}
            style={{height: 60, width: 60}}
          />
        </View>
        <View>
          <Text>Change text color</Text>
          <ColorPicker
            hideControls={true}
            hideSliders={true}
            onColorSelected={color => setTextColor(color)}
            style={{height: 60, width: 60}}
          />
        </View>
        <SelectDropdown
          defaultButtonText="Logo postion"
          data={position}
          onSelect={(selectedItem, index) => {
            setLogoPostion(selectedItem);
          }}
          buttonStyle={{height: 30, width: 160, marginTop: 30}}
          buttonTextStyle={{fontSize: 14}}
        />

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
