import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import * as images from '../images/images';

const AddCard = props => {
  const [cards] = useState([
    // {
    //   cardType: {
    //     title: 'Aadhaar card',
    //     color: 'rgb(32,21,75)',
    //     position: 'center',
    //   },
    //   issuedOn: {
    //     title: '22 may 2020',
    //     color: 'rgb(32,21,75)',
    //     position: 'left',
    //   },
    //   logo: {image: images.Logo, position: 'flex-end'},
    //   createBy: {
    //     title: 'IIT Bombay',
    //     color: 'rgb(32,21,75)',
    //     position: 'right',
    //   },
    //   cardBackground: 'rgb(226,241,254)',
    //   aadhaarName: {title: 'john', color: 'rgb(32,21,75)', position: 'left'},
    //   aadhaarNumber: {
    //     title: '123456789',
    //     color: 'rgb(32,21,75)',
    //     position: 'left',
    //   },
    // },
    {
      type: "Aadhaar",
      version: "V1",
      displayModel: {
        fontInformation: {
          size: 14,
          color: "blue",
          // fontFamily: ""
        },
        cardInformation: {
          backgroundColor: "solid",
          gradient: {
            direction: "",
            firstColor: "",
            secondColor: "" 
          },
          solid: "#ffffff"
        },
        headStyleInformation: {
          logos: {
            left: {
              show: true,
              size: {
                height: 15,
                width:15
              },
              image:images.Logo
            },
            center: {
              show: false,
              size: {
                height: "",
                width: ""
              }
            },
            right: {
              show: true,
              size: {
                height: 15,
                width: 15
              },
              image:images.Logo
            }
          },
          title: {
            position: "center",
            mainHeading: true,
            subHeading: false
          }
        },
        bodyStyleInformation: {
          placement: {
            left: "image",
            right: "content",
            center: ""
          },
          content: {
            name: {
              name:"Rishin V Thomas",
              size: 15,
              decoration: [
                "bold"
              ],
              color: "#000000",
              font: null,
              show: true,
              margin:10
            },
            idNumber: {
              number:"XXXXXXXX232424",
              size: 15,
            decoration: [
              "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: false
            },
            date: {
              date:"01/01/2022",
              size: 15,
              decoration: [
                "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: true
            },
            subIdNumber: {
              size: 20,
              decoration: [
                "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: true
            }
          },
          image: {
            show: "true",
            size: {
              height: 50,
              width: 50
            }
          },
          logo: {
            show: false,
            size: {
              height: 50,
              width: 50
            }
          }
        },
        footerStyleInformation: {
          footerBorder: {
            position: "top",
            show: true,
            color: "red",
            size: 2
          },
          waterMark: {
            border: "1px solid #000000",
            position: "center",
            padding: "3px",
            color: "#000000"
          }
        }
      }
    },
    {
      type: "Pan",
      version: "V1",
      displayModel: {
        fontInformation: {
          size: 14,
          color: "blue",
          // fontFamily: ""
        },
        cardInformation: {
          backgroundColor: "solid",
          gradient: {
            direction: "",
            firstColor: "",
            secondColor: "" 
          },
          solid: "#ffffff"
        },
        headStyleInformation: {
          logos: {
            left: {
              show: true,
              size: {
                height: 15,
                width:15
              },
              image:images.Logo
            },
            center: {
              show: false,
              size: {
                height: "",
                width: ""
              }
            },
            right: {
              show: true,
              size: {
                height: 15,
                width: 15
              },
              image:images.Logo
            }
          },
          title: {
            position: "center",
            mainHeading: true,
            subHeading: false
          }
        },
        bodyStyleInformation: {
          placement: {
            left: "content",
            right: "right",
            center: ""
          },
          content: {
            name: {
              name:"john",
              size: 15,
              decoration: [
                "bold"
              ],
              color: "#000000",
              font: null,
              show: true,
              margin:10
            },
            idNumber: {
              size: 15,
            decoration: [
              "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: false
            },
            date: {
              date:"01/01/2022",
              size: 15,
              decoration: [
                "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: true
            },
            subIdNumber: {
              number:"123456",
              size: 20,
              decoration: [
                "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: true
            }
          },
          image: {
            show: "true",
            size: {
              height: 50,
              width: 50
            }
          },
          logo: {
            show: false,
            size: {
              height: 50,
              width: 50
            }
          }
        },
        footerStyleInformation: {
          footerBorder: {
            position: "top",
            show: false,
            color: "red",
            size: 2
          },
          waterMark: {
            border: "1px solid #000000",
            position: "center",
            padding: "3px",
            color: "#000000"
          }
        }
      }
    },
    {
      type: "Driving",
      version: "V1",
      displayModel: {
        fontInformation: {
          size: 14,
          color: "blue",
          // fontFamily: ""
        },
        cardInformation: {
          backgroundColor: "solid",
          gradient: {
            direction: "",
            firstColor: "",
            secondColor: "" 
          },
          solid: "#ffffff"
        },
        headStyleInformation: {
          logos: {
            left: {
              show: true,
              size: {
                height: 15,
                width:15
              },
              image:images.Logo
            },
            center: {
              show: false,
              size: {
                height: "",
                width: ""
              }
            },
            right: {
              show: true,
              size: {
                height: 15,
                width: 15
              },
              image:images.Logo
            }
          },
          title: {
            position: "center",
            mainHeading: true,
            subHeading: false
          }
        },
        bodyStyleInformation: {
          placement: {
            left: "content",
            right: "right",
            center: ""
          },
          content: {
            name: {
              name:"john",
              size: 15,
              decoration: [
                "bold"
              ],
              color: "#000000",
              font: null,
              show: true,
              margin:10
            },
            idNumber: {
              size: 15,
            decoration: [
              "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: false
            },
            date: {
              date:"01/01/2022",
              size: 15,
              decoration: [
                "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: true
            },
            subIdNumber: {
              number:"123456",
              size: 20,
              decoration: [
                "bold",
                "underline"
              ],
              color: "#000000",
              font: null,
              show: true
            }
          },
          image: {
            show: "true",
            size: {
              height: 50,
              width: 50
            }
          },
          logo: {
            show: true,
            size: {
              height: 50,
              width: 50
            }
          }
        },
        footerStyleInformation: {
          footerBorder: {
            position: "top",
            show: false,
            color: "red",
            size: 2
          },
          waterMark: {
            border: "1px solid #000000",
            position: "center",
            padding: "3px",
            color: "#000000"
          }
        }
      }
    },
    
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems:"center"}}>
      
      {cards?.map((itm, idx) => {
        return (
          <TouchableOpacity
            key={idx}
            // onPress={() => {
            //   props.navigation.navigate('editCard', itm);
            // }}
            style={[styles.card, {backgroundColor: itm?.displayModel?.cardInformation?.solid}]}>
              <View style={{paddingHorizontal:10,paddingTop:10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                 <Image source={itm?.displayModel?.headStyleInformation?.logos?.left?.image} style={{height:itm?.displayModel?.headStyleInformation?.logos?.left?.size?.height,width:itm?.displayModel?.headStyleInformation?.logos?.left?.size?.width}} />
              <Text style={{fontSize:itm?.displayModel?.fontInformation?.size,color:itm?.displayModel?.fontInformation?.color}}>
                {itm?.type}
              </Text>
              <Image source={itm?.displayModel?.headStyleInformation?.logos?.right?.image}style={{height:itm?.displayModel?.headStyleInformation?.logos?.right?.size?.height,width:itm?.displayModel?.headStyleInformation?.logos?.right?.size?.width}} />
            </View>
            <View style={{width:"100%",flexDirection:"row",alignItems:"center",marginTop:10,justifyContent:"space-between"}}>
             {itm?.displayModel?.bodyStyleInformation?.placement?.left == "image"? <View style={{height:80,width:60,backgroundColor:"green"}}></View>:null}
             {itm?.displayModel?.bodyStyleInformation?.logo?.show ? <View style={{height:40,width:40,backgroundColor:"blue"}}></View>:null}
              <View style={{marginLeft:20}}>
                <Text style={{marginTop:itm?.displayModel?.bodyStyleInformation?.content?.name.margin}}>{itm?.displayModel?.bodyStyleInformation?.content?.name?.name}</Text>
                {itm?.displayModel?.bodyStyleInformation?.content?.subIdNumber?.number ?
                <Text style={{marginTop:7}}>{itm?.displayModel?.bodyStyleInformation?.content?.subIdNumber?.number}</Text>:null}
                <Text style={{marginTop:7}}>{`Issue date: ${itm?.displayModel?.bodyStyleInformation?.content?.date?.date}`}</Text>
              </View>
              {itm?.type == "Aadhaar"?<View style={{height:80,width:60}}></View>:null}
              {itm?.displayModel?.bodyStyleInformation?.placement?.left != "image"? <View style={{height:80,width:60,backgroundColor:"green"}}></View>:null}
            </View>
            </View>
            {itm?.displayModel?.bodyStyleInformation?.content?.idNumber?.number?
            <Text style ={{textAlign:"center",marginTop:20}}>{itm?.displayModel?.bodyStyleInformation?.content?.idNumber?.number}</Text>:null}
            {itm?.displayModel?.footerStyleInformation?.footerBorder?.show ?
            <View style={{height:1,backgroundColor:"red",width:"95%",margin:10}}></View>:null}
            <View style={{alignSelf:"center",height:30,width:"60%",borderRadius:20,borderWidth:1,justifyContent:"center",alignItems:"center",marginBottom:20}}>
              <Text style ={{fontSize:15}}>Verified by digilocker</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    marginTop: 50,
    // justifyContent: 'center',
  },
  card: {
    backgroundColor: 'grey',
    height: 240,
    width: '90%',
    borderRadius: 15,
    // padding: 20,
    justifyContent: 'space-between',
    marginTop:20
   
  },
  logo: {
    height: 40,
    width: 40,
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
