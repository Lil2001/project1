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
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaskInput from 'react-native-mask-input';

import Svg, {Defs, G, Path, Rect, Circle, ClipPath} from 'react-native-svg';
import {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LogoSvg from '../../../assets/Svg/LogoSvg';
import ErrorInfSvg from '../../../assets/Svg/ErrorInfSvg';

export default function App(props) {
  const navigation = props.navigation;

  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      // Cleanup function to clear the timeout when the component unmounts or when seconds reaches 0
      return () => {
        clearTimeout(timer);
      };
    }
  }, [seconds]);

  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];

  const [phone, setPhone] = useState('');
  const [phone_error, setPhoneError] = useState(false);
  const [valid_phone, setValidPhone] = useState(false);
  const [phoneData, setPhoneData] = useState([]);

  const [call_code_popup, setCallCodePopup] = useState(false);

  const [call_code1, setCallCode1] = useState('');
  const [call_code1_field_error, setCallCode1FieldError] = useState(false);
  const [call_code1_field_valid, setCallCode1FieldValid] = useState(true);
  const [focus1, setFocus1] = useState(false);

  const [call_code2, setCallCode2] = useState('');
  const [call_code2_field_error, setCallCode2FieldError] = useState(false);
  const [call_code2_field_valid, setCallCode2FieldValid] = useState(true);
  const [focus2, setFocus2] = useState(false);

  const [call_code3, setCallCode3] = useState('');
  const [call_code3_field_error, setCallCode3FieldError] = useState(false);
  const [call_code3_field_valid, setCallCode3FieldValid] = useState(true);
  const [focus3, setFocus3] = useState(false);

  const [call_code4, setCallCode4] = useState('');
  const [call_code4_field_error, setCallCode4FieldError] = useState(false);
  const [call_code4_field_valid, setCallCode4FieldValid] = useState(true);
  const [call_code5_field_error, setCallCode5FieldError] = useState(false);
  const [call_code5_field_valid, setCallCode5FieldValid] = useState(true);
  const [focus4, setFocus4] = useState(false);
  const [focus5, setFocus5] = useState(false);
  const [call_code5, setCallCode5] = useState('');
  const [call_popup_countdown_timer_number, setCallPopupCountdownTimerNumber] =
    useState(5);
  const [language, setLanguage] = useState('');

  const [show_timer_for_call_popup, setShowTimerForCallPopup] = useState(true);

  const [message_code_popup, setMessageCodePopup] = useState(false);
  const [show_timer_for_message_popup, setShowTimerForMessagePopup] =
    useState(true);
  const [
    message_popup_countdown_timer_number,
    setMessagePopupCountdownTimerNumber,
  ] = useState(5);

  const [codeResult, setCodeResult] = useState([]);
  const [codeResultSMS, setCodeResultSMS] = useState([]);

  const getLanguages = async () => {
    let language = await AsyncStorage.getItem('language');
    setLanguage(language);
  };

  getLanguages();

  const {translates} = useSelector(state => state.reducerProfile);
  // {translates.pages?.creating_an_ad.vehicle_data}

  const sendPhoneNumberSMS = () => {
    var raw = JSON.stringify({
      translation: 'ru',
      phone: props.route.params.phone,
      provider: 'sms',
    });
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'https://staging.autoboom.co.il/api/mobile/users/send_login_code',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result, 'dfuhdkjg');
        setPhoneData(result);
        if (result.success) {
          messageToNumber();
          props.navigation.navigate('AuthComponentWithSMS', {
            phone: props.route.params.phone,
          });
        }
      })
      .catch(error => console.log('error', error));
  };

  const sendPhoneNumberCall = () => {
    var raw = JSON.stringify({
      translation: 'ru',
      phone: props.route.params.phone,
      provider: 'call',
    });

    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'https://staging.autoboom.co.il/api/mobile/users/send_login_code',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result, 'dfuhdkjg');
        setPhoneData(result);
        if (result.success) {
          callToNumber();
          startCallpopupInterval();
        }
      })
      .catch(error => console.log('error', error));
  };

  const call_firstInput_ref = useRef(null);
  const call_secondInput_ref = useRef(null);
  const call_thirdInput_ref = useRef(null);
  const call_fourthInput_ref = useRef(null);
  const call_fifethInput_ref = useRef(null);

  const onChangePhoneInput = async value => {
    setPhone(value);
    if (value.length > 5) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };

  console.log(props.route.params.phone, 'kkokok');
  const callToNumber = async () => {
    setCallCodePopup(true);
    startCallpopupInterval();
  };

  const startCallpopupInterval = async () => {
    setCallPopupCountdownTimerNumber(5);
    setCallCodePopup(true);
    setShowTimerForCallPopup(true);

    let interval = setInterval(() => {
      setCallPopupCountdownTimerNumber(prevState => {
        if (prevState > 0) {
          return prevState - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
  };

  const messageToNumber = async () => {
    setMessagePopupCountdownTimerNumber(5);
    setCallCodePopup(false);
    setMessageCodePopup(true);

    let interval = setInterval(() => {
      setMessagePopupCountdownTimerNumber(prevState => {
        // console.log('dwd')
        if (prevState > 0) {
          return prevState - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
  };

  const changeFirstCodeInput = value => {
    if (value.length < 2) {
      setCallCode1(value);

      if (value.length == 1) {
        setCallCode1FieldError(false);
        setCallCode1FieldValid(true);
        call_secondInput_ref.current.focus();
      } else {
        setCallCode1FieldError(false);
        setCallCode1FieldValid(false);
      }
    }
  };

  const changeSecondCodeInput = value => {
    if (value.length < 2) {
      setCallCode2(value);

      if (value.length == 1) {
        setCallCode2FieldError(false);
        setCallCode2FieldValid(true);

        call_thirdInput_ref.current.focus();
      }

      if (value.length == 0) {
        setCallCode2FieldError(false);
        setCallCode2FieldValid(false);
        call_firstInput_ref.current.focus();
      }
    }
  };

  const changeThirdCodeInput = value => {
    if (value.length < 2) {
      setCallCode3(value);
      if (value.length == 1) {
        setCallCode3FieldError(false);
        setCallCode3FieldValid(true);
        call_fourthInput_ref.current.focus();
      }

      if (value.length == 0) {
        setCallCode3FieldError(false);
        setCallCode3FieldValid(false);
        call_secondInput_ref.current.focus();
      }
    }
  };

  const changeFourthCodeInput = value => {
    if (value.length < 2) {
      setCallCode4(value);

      if (value.length == 1) {
        setCallCode4FieldError(false);
        setCallCode4FieldValid(true);
        if (message_code_popup) {
          call_fifethInput_ref.current.focus();
        }
      }
      if (value.length == 0) {
        setCallCode4FieldError(false);
        setCallCode4FieldValid(false);
        call_thirdInput_ref.current.focus();
      }
    }
  };

  const changeFifethCodeInput = value => {
    if (value.length < 2) {
      setCallCode5(value);
      if (value.length == 1) {
        setCallCode5FieldError(false);
        setCallCode5FieldValid(true);
      }
      if (value.length == 0) {
        setCallCode5FieldError(false);
        setCallCode5FieldValid(false);
        call_fourthInput_ref.current.focus();
      }
    }
  };

  const loginAndSendCodeWithCall = () => {
    let raw = JSON.stringify({
      phone: props.route.params.phone,
      code: Number(call_code1 + call_code2 + call_code3 + call_code4),
      grant_type: 'sms',
      client_id: 3,
      client_secret: 'RNchATyvHDOJlB98hTxECoY1nAsRiErxQBKPH3tr,',
    });
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'https://staging.autoboom.co.il/api/mobile/users/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        // console.log(result, 'code result');
        setCodeResult(result);
        let accessToken = result.access_token;
        let refreshToken = result.refresh_token;
        // console.log(accessToken, 'sdsferfvszdf');
        console.log(result.success, 'sdsdsds');
        if (accessToken) {
          setStorage(accessToken, refreshToken, function () {
            props.navigation.navigate('SearchComponent');
          });
        }
      })
      .catch(error => console.log('error', error));
  };

  const loginAndSendCodeWithSMS = () => {
    let raw = JSON.stringify({
      phone: props.route.params.phone,
      code: call_code1 + call_code2 + call_code3 + call_code4 + call_code5,
      grant_type: 'sms',
      client_id: 3,
      client_secret: 'RNchATyvHDOJlB98hTxECoY1nAsRiErxQBKPH3tr,',
    });
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    };
    fetch(
      'https://staging.autoboom.co.il/api/mobile/users/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.access_token, 'code result');
        setCodeResultSMS(result);
        let accessToken = result.access_token;
        let refreshToken = result.refresh_token;
        if (accessToken) {
          setStorage(accessToken, refreshToken, function () {
            props.navigation.navigate('SearchComponent');
          });
        }
      })
      .catch(error => console.log('error', accessToken));
  };

  async function setStorage(accessToken, refreshToken, callback) {
    await AsyncStorage.setItem('accessToken', `${accessToken}`);
    await AsyncStorage.setItem('refreshToken', `${refreshToken}`);
    callback();
  }

  const setToken = async () => {
    let token = await AsyncStorage.getItem('accessToken');
  };
  setToken();

  useEffect(() => {
    // interval();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, {marginBottom: 24}]}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setCallCodePopup(false);
            }}>
            <Svg
              width={43}
              height={44}
              viewBox="0 0 43 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M25 15l-6.93 6.93a.1.1 0 000 .14L25 29"
                stroke="#091334"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <LogoSvg />
        <View style={{flex: 1, alignItems: 'flex-end'}}></View>
      </View>

      <Text style={styles.title5}>
        Введите <Text style={styles.title6}>последние 4 цфиры</Text> входящего
        номера
      </Text>
      <View style={styles.call_code_inputs_wrapper}>
        <TextInput
          ref={call_firstInput_ref}
          style={[
            styles.code_input_field,
            {
              borderWidth: 1,
              borderColor: '#C4C8D4',
            },
            focus1 && {borderColor: '#2B65EE'},
            codeResult.error && {borderColor: '#A4223C'},
          ]}
          onChangeText={value => {
            changeFirstCodeInput(value);
          }}
          value={call_code1}
          placeholderTextColor="#000000"
          keyboardType="numeric"
          onFocus={() => setFocus1(true)}
        />
        <TextInput
          ref={call_secondInput_ref}
          style={[
            styles.code_input_field,
            {
              borderWidth: 1,
              borderColor: '#C4C8D4',
            },
            focus2 && {borderColor: '#2B65EE'},
            codeResult.error && {borderColor: '#A4223C'},
          ]}
          onChangeText={value => {
            changeSecondCodeInput(value);
          }}
          value={call_code2}
          keyboardType="numeric"
          onFocus={() => setFocus2(!focus2)}
        />
        <TextInput
          ref={call_thirdInput_ref}
          style={[
            styles.code_input_field,
            {
              borderWidth: 1,
              borderColor: '#C4C8D4',
            },
            focus3 && {borderColor: '#2B65EE'},
            codeResult.error && {borderColor: '#A4223C'},
          ]}
          onChangeText={value => {
            changeThirdCodeInput(value);
          }}
          value={call_code3}
          keyboardType="numeric"
          onFocus={() => setFocus3(!focus3)}
        />
        <TextInput
          ref={call_fourthInput_ref}
          style={[
            styles.code_input_field,
            {
              borderWidth: 1,
              borderColor: '#C4C8D4',
            },
            focus4 && {borderColor: '#2B65EE'},
            codeResult.error && {borderColor: '#A4223C'},
          ]}
          onChangeText={value => {
            changeFourthCodeInput(value);
          }}
          value={call_code4}
          keyboardType="numeric"
          onFocus={() => setFocus4(!focus4)}
        />
      </View>

      <View
        style={[
          {
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: 12,
          },
          language === '{"language":"he"}' || language === '{"language":"ar"}'
            ? {flexDirection: 'row-reverse'}
            : '',
        ]}>
        {show_timer_for_call_popup && seconds > 0 ? (
          <Text style={styles.timer_text}>
            Звонок поступит в течение {seconds}
          </Text>
        ) : (
          <TouchableOpacity
            style={styles.call_not_received}
            onPress={() => {
              sendPhoneNumberSMS();
            }}>
            <Text style={styles.call_not_received_text}>
              Звонок не поступил?
            </Text>
          </TouchableOpacity>
        )}
        {codeResult.error && (
          <Text style={styles.call_popup_mistake_numbers_error}>
            Цифры неверны
          </Text>
        )}
      </View>

      <TouchableOpacity
        onPress={() => {
          loginAndSendCodeWithCall();
        }}
        style={[
          styles.continueButton,
          {backgroundColor: '#2B65EE', width: '90%', marginTop: 400},
        ]}>
        <Text style={[styles.continueButtonText, {color: 'white'}]}>
          {translates.pages?.common.continue}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F0F1F4',
  },
  scrollTop: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingTop: 24,
  },
  scrollBottom: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F0F1F4',
    minHeight: 50,
    paddingTop: 24,
  },
  title1: {
    color: '#091334',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  title2: {
    lineHeight: 24,
    color: '#6C7694',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  phoneInputWrapper: {
    width: '100%',
    marginBottom: 16,
  },

  phoneInput: {
    width: '100%',
    height: 44,
    borderColor: '#C4C8D4',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#091334',
  },
  phoneErrorText: {
    marginTop: 8,
    color: '#E72A4A',
    fontSize: 14,
  },
  phoneErrorBorder: {
    borderWidth: 1,
    borderColor: '#E72A4A',
  },

  errorInfButton: {
    position: 'absolute',
    right: 12,
    top: 12,
  },

  continueButton: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 8,
  },
  continueButtonText: {
    fontSize: 16,
  },
  title3: {
    lineHeight: 24,
    color: '#091334',
    fontSize: 18,
    marginBottom: 24,
  },
  scrollBottomItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  scrollBottomItemText: {
    flex: 1,
    marginLeft: 16,
    lineHeight: 24,
    fontSize: 16,
    color: '#6C7694',
  },

  title5: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 320,
    color: '#091334',
  },
  title6: {
    fontWeight: 'bold',
  },

  call_code_inputs_wrapper: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  code_input_field: {
    width: '23%',
    height: 44,
    borderRadius: 6,
    color: '#091334',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timer_text: {
    color: '#6C7694',
    fontSize: 14,
    fontWeight: '400',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },

  call_not_received: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  call_not_received_text: {
    color: '#2B65EE',
    fontSize: 14,
    fontWeight: '400',
  },

  call_popup_mistake_numbers_error: {
    color: '#E72A4A',
    fontSize: 14,
    fontWeight: '400',
  },
});
