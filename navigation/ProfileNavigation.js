import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(props) {
  const route = useRoute();
  const [language, setLanguage] = React.useState('');

  const getLanguages = async () => {
    let language = await AsyncStorage.getItem('language');
    setLanguage(language);
  };
  getLanguages();

  const {translates} = useSelector(state => state.reducerProfile);

  return (
    <View style={{width: '100%'}}>
      {language === '{"language":"he"}' || language === '{"language":"ar"}' ? (
        <View style={[styles.scrollViewWrapper]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('WalletScreen');
            }}
            style={styles.menuTopButton}>
            <Text
              style={[
                styles.menuTopButtonText,
                route.name == 'WalletScreen'
                  ? styles.menuTopButtonTextActive
                  : null,
                {paddingLeft: 30},
              ]}>
              {translates.pages?.common.wallet}
            </Text>
            {route.name === 'WalletScreen' && (
              <View style={styles.menuTopButtonActiveLine}></View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MyAnnouncements');
            }}
            style={styles.menuTopButton}>
            <Text
              style={[
                styles.menuTopButtonText,
                route.name == 'MyAnnouncements'
                  ? styles.menuTopButtonTextActive
                  : null,
              ]}>
              {translates.pages?.common.my_announcements}
            </Text>

            {route.name === 'MyAnnouncements' && (
              <View style={styles.menuTopButtonActiveLine}></View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MyProfile');
            }}
            style={styles.menuTopButton}>
            <Text
              style={[
                styles.menuTopButtonText,
                route.name === 'MyProfile'
                  ? styles.menuTopButtonTextActive
                  : null,
                {textAlign: 'left', paddingRight: 30},
              ]}>
              {translates.pages?.common.profile}
            </Text>
            {route.name === 'MyProfile' && (
              <View style={styles.menuTopButtonActiveLine}></View>
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.scrollViewWrapper]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MyProfile');
            }}
            style={styles.menuTopButton}>
            <Text
              style={[
                styles.menuTopButtonText,
                route.name === 'MyProfile'
                  ? styles.menuTopButtonTextActive
                  : null,
                {textAlign: 'left', paddingRight: 30},
              ]}>
              {translates.pages?.common.profile}
            </Text>
            {route.name === 'MyProfile' && (
              <View style={styles.menuTopButtonActiveLine}></View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MyAnnouncements');
            }}
            style={styles.menuTopButton}>
            <Text
              style={[
                styles.menuTopButtonText,
                route.name == 'MyAnnouncements'
                  ? styles.menuTopButtonTextActive
                  : null,
              ]}>
              {translates.pages?.common.my_announcements}
            </Text>

            {route.name === 'MyAnnouncements' && (
              <View style={styles.menuTopButtonActiveLine}></View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('WalletScreen');
            }}
            style={styles.menuTopButton}>
            <Text
              style={[
                styles.menuTopButtonText,
                route.name == 'WalletScreen'
                  ? styles.menuTopButtonTextActive
                  : null,
                {paddingLeft: 30},
              ]}>
              {translates.pages?.common.wallet}
            </Text>
            {route.name === 'WalletScreen' && (
              <View style={styles.menuTopButtonActiveLine}></View>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewWrapper: {
    height: 36,
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollView: {
    width: '100%',
    height: 36,
  },
  menuTopButtonWrapper: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
  },

  menuTopButton: {
    flex: 1,
    height: 36,
    width: '33%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuTopButtonText: {
    color: '#6C7693',
    fontSize: 16,
  },

  menuTopButtonActive: {},
  menuTopButtonTextActive: {
    color: '#091334',
  },
  menuTopButtonActiveLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#2B65EE',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    zIndex: 2,
  },
});
