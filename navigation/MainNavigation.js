import * as React from 'react';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import AnnouncementSvg from '../../assets/Svg/categories/announcement';
import CatalogSvg from '../../assets/Svg/categories/catalog';
import JournalSvg from '../../assets/Svg/categories/journal';
import CompaniesSvg from '../../assets/Svg/categories/companies';
import {useState} from 'react';

export default function App(props) {
  const [language, setLanguage] = useState('');

  const getLanguages = async () => {
    let language = await AsyncStorage.getItem('language');
    setLanguage(language);
  };

  getLanguages();

  const {translates} = useSelector(state => state.reducerProfile);

  // {translates.pages?.home.ads}

  return (
    <View style={styles.searchBlockWrapper}>
      {language === '{"language":"he"}' || language === '{"language":"ar"}' ? (
        <View style={styles.categoryItemWrapper}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('CompanyScreen')}
            style={styles.categoryItem}>
            <CompaniesSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.company}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('JournalPage');
            }}
            style={styles.categoryItem}>
            <JournalSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.journal}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('CatalogSelectMarkComponent');
            }}
            style={styles.categoryItem}>
            <CatalogSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.catalog}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SearchComponent');
            }}
            style={styles.categoryItem}>
            <AnnouncementSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.ads}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.categoryItemWrapper}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SearchComponent');
            }}
            style={styles.categoryItem}>
            <AnnouncementSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.ads}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('CatalogSelectMarkComponent');
            }}
            style={styles.categoryItem}>
            <CatalogSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.catalog}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('JournalPage');
            }}
            style={styles.categoryItem}>
            <JournalSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.journal}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('CompanyScreen')}
            style={styles.categoryItem}>
            <CompaniesSvg />
            <Text style={styles.categoryItemText}>
              {translates.pages?.common?.company}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBlockWrapper: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 15,
  },

  categoryItemWrapper: {
    width: '100%',
    marginBottom: 24,
    flexDirection: 'row',
    // backgroundColor:'blue',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryItemText: {
    fontSize: 12,
    color: '#091334',
    marginTop: 8,
  },
  borderFilterWrapper: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 24,
    borderColor: 'silver',
    borderWidth: 1,
  },
  autoMarksWrapper: {
    width: '100%',
    paddingLeft: 16,
    minHeight: 36,
    // backgroundColor:'blue',
    marginBottom: 20,
  },
  autoMarksScrollView: {
    width: '100%',
    // backgroundColor: 'green'
  },
  autoMarksItem: {
    marginRight: 24,
  },

  fiktivInputWrapper: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  fiktivInput: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C4C8D4',
    marginHorizontal: 4,
  },
  fiktivInputText: {
    color: '#6C7694',
    fontSize: 16,
  },
  searchBlueButtonWrapper: {
    width: '100%',
    paddingHorizontal: 16,
  },
  searchBlueButton: {
    width: '100%',
    height: 44,
    backgroundColor: '#2B65EE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  searchBlueButtonText: {
    color: 'white',
    fontSize: 16,
  },
  autoTypesWrapper: {
    width: '100%',
    paddingLeft: 16,
  },
});
