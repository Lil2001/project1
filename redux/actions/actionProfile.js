import AsyncStorage from '@react-native-async-storage/async-storage';
import {ru} from '../../i18n/translate_ru';
import {en} from '../../i18n/translate_en';
import {he} from '../../i18n/translate_he';
export const GET_TRANSLATE = 'GET_TRANSLATE';

export const getTranslate = () => {
  try {
    return async dispatch => {
      // alert()
      await AsyncStorage.getItem('language', (err, item) => {
        let language = item ? JSON.parse(item) : {};
        if (language.hasOwnProperty('language')) {
          let selected_language = en;

          switch (language.language) {
            case 'ru':
              selected_language = ru;
              break;
            case 'en':
              selected_language = en;
              break;
            case 'he':
              selected_language = he;
              break;
          }
          dispatch({
            type: GET_TRANSLATE,
            payload: selected_language,
          });
        } else {
          dispatch({
            type: GET_TRANSLATE,
            payload: ru,
          });
        }
      });
    };
  } catch (error) {
    console.log(error, 'errorr');
  }
};
