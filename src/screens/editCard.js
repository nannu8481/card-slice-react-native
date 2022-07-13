import React, {useState} from 'react';
import {ColorPicker} from 'react-native-color-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
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
        style={[
          styles.cardContainer,
          {
            backgroundColor: cardBackground,
          },
        ]}>
        <Text style={[styles.nameNumberText, {color: textColor}]}>
          {cardData?.cardNumber}
        </Text>
        <Image
          source={{uri: `data:image/png;base64,${cardData?.logo}`}}
          style={{
            height: 60,
            width: 60,
            alignSelf: logoPostion,
          }}></Image>
        <Text style={[styles.nameNumberText, {color: textColor}]}>
          {cardData?.userName}
        </Text>
      </View>
      <View style={styles.formConatiner}>
        <View>
          <Text>Change card background</Text>
          <ColorPicker
            hideControls={true}
            hideSliders={true}
            onColorSelected={color => setCardBackground(color)}
            style={styles.colorPickerContainer}
          />
        </View>
        <View>
          <Text>Change text color</Text>
          <ColorPicker
            hideControls={true}
            hideSliders={true}
            onColorSelected={color => setTextColor(color)}
            style={styles.colorPickerContainer}
          />
        </View>
        <SelectDropdown
          defaultButtonText="Logo postion"
          data={position}
          onSelect={(selectedItem, index) => {
            setLogoPostion(selectedItem);
          }}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={{fontSize: 14}}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: '80%',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
  backButton: {
    height: 40,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 20,
  },
  dropdownButton: {
    height: 30,
    width: 160,
    marginTop: 30,
  },
  colorPickerContainer: {
    height: 60,
    width: 60,
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
  nameNumberText: {
    fontSize: 14,
  },
});
