import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import * as images from '../images/images';

const AddCard = props => {
  const [cards] = useState([
    {
      cardBackground: 'rgb(226,241,254)',
      cardType: {
        title: 'Aadhaar card',
        color: 'rgb(32,21,75)',
        position: 'center',
      },
      issuedOn: {
        title: '26 july 2022',
        color: 'rgb(32,21,75)',
        position: 'left',
      },
      logo: {image: images.Logo, position: 'flex-end'},
      createBy: {
        title: 'Digiloker',
        color: 'rgb(32,21,75)',
        position: 'right',
      },
      aadhaarName: {title: 'john', color: 'rgb(32,21,75)', position: 'left'},
      aadhaarNumber: {
        title: '123456789',
        color: 'rgb(32,21,75)',
        position: 'left',
      },
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {cards?.map((itm, idx) => {
        return (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              props.navigation.navigate('editCard', itm);
            }}
            style={[styles.card, {backgroundColor: itm?.cardBackground}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.numberNameText, {fontSize: 20}]}>
                {itm?.cardType?.title}
              </Text>
              <Image source={itm?.logo.image} style={styles.logo} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View>
                <Text style={[styles.numberNameText, {fontSize: 12}]}>
                  Issued on
                </Text>
                <Text style={styles.numberNameText}>
                  {itm?.issuedOn?.title}
                </Text>
              </View>
              <Text style={styles.numberNameText}>{itm?.createBy?.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
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
    justifyContent: 'center',
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
    alignSelf: 'flex-end',
  },
  numberNameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(32,21,75)',
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
