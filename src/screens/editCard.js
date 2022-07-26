import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const EditCard = ({navigation, route}) => {
  const dataPassFromPreviousScrn = route?.params;
  const [cardData, setCardData] = useState(dataPassFromPreviousScrn);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: cardData?.cardBackground}]}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.formConatiner}>
          <View style={styles.valuesContainer}>
            <Text>Card Type </Text>
            <Text
              style={{
                fontSize: 20,
                color: cardData?.cardType?.color,
                textAlign: cardData?.cardType?.position,
              }}>
              {cardData?.cardType?.title}
            </Text>
          </View>
          <View style={styles.valuesContainer}>
            <Text>Aadhaar Name </Text>
            <Text
              style={{
                fontSize: 20,
                color: cardData?.aadhaarName?.color,
                textAlign: cardData?.aadhaarName?.position,
              }}>
              {cardData?.aadhaarName?.title}
            </Text>
          </View>
          <View style={styles.valuesContainer}>
            <Text>Aadhaar Number </Text>
            <Text
              style={{
                fontSize: 20,
                color: cardData?.aadhaarName?.color,
                textAlign: cardData?.aadhaarName?.position,
              }}>
              {cardData?.aadhaarNumber?.title}
            </Text>
          </View>
          <View style={styles.valuesContainer}>
            <Text>Issued on</Text>
            <Text
              style={{
                fontSize: 20,
                color: cardData?.issuedOn?.color,
                textAlign: cardData?.issuedOn?.position,
              }}>
              {cardData?.issuedOn?.title}
            </Text>
          </View>
          <View style={styles.valuesContainer}>
            <Text>Create By</Text>
            <Text
              style={{
                fontSize: 20,
                color: cardData?.createBy?.color,
                textAlign: cardData?.createBy?.position,
              }}>
              {cardData?.createBy?.title}
            </Text>
          </View>
          <View style={styles.valuesContainer}>
            <Text>Logo</Text>
            <Image
              source={cardData?.logo?.image}
              style={[styles.logo, {alignSelf: cardData?.logo?.position}]}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Text>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: 'grey',
    height: 200,
    width: '80%',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    borderWidth: 5,
    borderColor: 'rgb(0,70,145)',
  },
  logo: {
    height: 60,
    width: 60,
    marginTop: 15,
  },
  numberNameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(32,21,75)',
  },
  formConatiner: {
    padding: 20,
    alignSelf: 'center',
    width: '90%',
  },
  inputContainer: {
    height: '15%',
  },
  input: {
    borderWidth: 1,
    height: '40%',
    width: '60%',
    borderRadius: 8,
    borderColor: '#948E8E',
    fontSize: 12,
    paddingHorizontal: 10,
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
  backButton: {
    height: 30,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 10,
    alignSelf: 'center',
  },
  valuesContainer: {
    marginTop: 15,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
