import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  Dimensions,
  AsyncStorage,
  PermissionsAndroid,
  NativeModules,
  BackHandler,
} from 'react-native';

import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

class FourData extends React.Component {
  render() {
    return (
      <SafeAreaProvider style={{backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#F97012" />

        <View
          style={{
            width: '100%',
            height: 60,
            elevation: 2,
            backgroundColor: '#F97012',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{height: 22, width: 12, resizeMode: 'contain'}}
                source={require('./backwhite.png')}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: 'Avenir',
                fontSize: 20,
                fontFamily: 'Avenir',
                color: 'white',
                marginLeft: 20,
              }}>
              Four Data
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            width: '90%',
            height: 95,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '48%',
              height: 95,
              borderRadius: 10,
              backgroundColor: '#FDE7E9',
            }}>
            <View
              style={{
                height: 98,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 19,
                  fontFamily: 'DMSans-Regular',
                  color: '#000',
                }}>
                Puja Booking
              </Text>
              <Image
                style={{
                  marginLeft: 8,
                  height: 30,
                  width: 22,
                }}
                source={require('./puja.png')}
              />
            </View>
          </View>

          <View
            style={{
              width: '48%',
              marginLeft: 10,
              height: 95,
              borderRadius: 10,
              backgroundColor: '#E0EBE5',
            }}>
            <View
              style={{
                height: 98,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 19,
                  fontFamily: 'DMSans-Regular',
                  color: '#000',
                }}>
                Astrologer
              </Text>
              <Image
                style={{
                  marginLeft: 8,
                  height: 30,
                  width: 26,
                }}
                source={require('./avatar.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            width: '90%',
            height: 95,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '48%',
              height: 95,
              borderRadius: 10,
              backgroundColor: '#EBD6F5',
            }}>
            <View
              style={{
                height: 98,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 19,
                  fontFamily: 'DMSans-Regular',
                  color: '#000',
                }}>
                Horoscope
              </Text>
              <Image
                style={{
                  marginLeft: 8,
                  height: 29,
                  width: 31,
                }}
                source={require('./horoscope.png')}
              />
            </View>
          </View>

          <View
            style={{
              width: '48%',
              marginLeft: 10,
              height: 95,
              borderRadius: 10,
              backgroundColor: '#FDF0E8',
            }}>
            <View
              style={{
                height: 98,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 19,
                  fontFamily: 'DMSans-Regular',
                  color: '#000',
                }}>
                Life-Prediction
              </Text>
              <Image
                style={{
                  marginLeft: 8,
                  height: 30,
                  width: 22,
                }}
                source={require('./lifePrediction.png')}
              />
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

export default FourData;
