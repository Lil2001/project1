import * as React from 'react';
import {useSelector} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  Slider,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(props) {
  const route = useRoute();
  const [language, setLanguage] = React.useState('');
  const {translates} = useSelector(state => state.reducerProfile);
  // {translates.pages?.journal.ads}

  const getLanguages = async () => {
    let language = await AsyncStorage.getItem('language');
    setLanguage(language);
  };

  getLanguages();

  return (
    <View style={styles.scrollViewWrapper}>
      <ScrollView
        horizontal={true}
        style={[
          styles.scrollView,
          language === '{"language":"he"}' || language === '{"language":"ar"}'
            ? {flexDirection: 'row-reverse'}
            : '',
        ]}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SearchComponent');
          }}
          style={[
            styles.menuTopButton,
            language === '{"language":"he"}' || language === '{"language":"ar"}'
              ? {width: 80}
              : '',
          ]}>
          <Text
            style={[
              styles.menuTopButtonText,
              route.name === 'SearchComponent'
                ? styles.menuTopButtonTextActive
                : null,
            ]}>
            {translates.pages?.common.ads}
          </Text>
          {route.name === 'SearchComponent' && (
            <View style={styles.menuTopButtonActiveLine}></View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('CatalogSelectMarkComponent');
          }}
          style={[
            styles.menuTopButton,
            language === '{"language":"he"}' || language === '{"language":"ar"}'
              ? {width: 80}
              : '',
          ]}>
          <Text
            style={[
              styles.menuTopButtonText,
              route.name == 'CatalogSelectMarkComponent'
                ? styles.menuTopButtonTextActive
                : null,
            ]}>
            {translates.pages?.common.catalog}
          </Text>

          {route.name === 'CatalogSelectMarkComponent' && (
            <View style={styles.menuTopButtonActiveLine}></View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('JournalPage');
          }}
          style={[
            styles.menuTopButton,
            language === '{"language":"he"}' || language === '{"language":"ar"}'
              ? {width: 80}
              : '',
          ]}>
          <Text
            style={[
              styles.menuTopButtonText,
              route.name == 'JournalPage'
                ? styles.menuTopButtonTextActive
                : null,
            ]}>
            {translates.pages?.common.journal}
          </Text>
          {route.name === 'JournalPage' && (
            <View style={styles.menuTopButtonActiveLine}></View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('CompanyScreen')}
          style={[
            styles.menuTopButton,
            language === '{"language":"he"}' || language === '{"language":"ar"}'
              ? {width: 80}
              : '',
          ]}>
          <Text
            style={[
              styles.menuTopButtonText,
              route.name == 'CompanyScreen' || route.name === 'CompanyMap'
                ? styles.menuTopButtonTextActive
                : null,
            ]}>
            {translates.pages?.common.company}
          </Text>
          {route.name === 'CompanyScreen' || route.name === 'CompanyMap' ? (
            <View style={styles.menuTopButtonActiveLine}></View>
          ) : (
            ''
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewWrapper: {
    height: 36,
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 17,
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
    // marginRight: 24,
    marginLeft: 16,
    height: 36,
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
