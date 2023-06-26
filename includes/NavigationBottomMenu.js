import * as React from 'react';
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

import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import Svg, {
  Defs,
  G,
  Path,
  Rect,
  Circle,
  ClipPath,
  Mask,
} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

// Search
import ActiveSearchPageSvg from '../../../assets/Svg/navigation_menu/Search/ActiveSearchPageSvg';
import NotActiveSearchPageSvg from '../../../assets/Svg/navigation_menu/Search/NotActiveSearchPageSvg';

// Favorite
import ActiveFavoritesPageSvg from '../../../assets/Svg/navigation_menu/Favorites/ActiveFavoritesPageSvg';
import NotActiveFavoritesPageSvg from '../../../assets/Svg/navigation_menu/Favorites/NotActiveFavoritesPageSvg';

// I Sell
import ActiveISellPageSvg from '../../../assets/Svg/navigation_menu/iSell/ActiveISellPageSvg';
import NotActiveISellPageSvg from '../../../assets/Svg/navigation_menu/iSell/NotActiveISellPageSvg';

// Messages
import ActiveMessagesPageSvg from '../../../assets/Svg/navigation_menu/Messages/ActiveMessagesPageSvg';
import NotActiveMessagesPageSvg from '../../../assets/Svg/navigation_menu/Messages/NotActiveMessagesPageSvg';

// Menu
import ActiveMenuPageSvg from '../../../assets/Svg/navigation_menu/Menu/ActiveMenuPageSvg';
import NotActiveMenuPageSvg from '../../../assets/Svg/navigation_menu/Menu/NotActiveMenuPageSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutIcon from '../../../assets/Svg/Logout';

export default function App(props) {
  const [active_page, setActivePage] = useState(props.active_page);
  const [menu_is_open, setMenuIsOpen] = useState(false);
  const [is_logged_user, setIsLoggedUser] = useState(null);
  const {translates} = useSelector(state => state.reducerProfile);

  // {translates.pages?.home.menue.menue}

  const userLogout = async () => {
    let token = await AsyncStorage.getItem('accessToken');
    let AuthStr = 'Bearer ' + token;
    let requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Autorization: AuthStr,
        'X-Access-Token': AuthStr,
      },
    };
    fetch(
      `https://staging.autoboom.co.il/api/mobile/users/logout`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result, 'resss');
        if (result.success) {
          deleteUser();
          props.navigation.navigate('SearchComponent');
        }
      })
      .catch(error => console.log(error));
  };

  const getToken = async () => {
    let token = await AsyncStorage.getItem('accessToken');
    setIsLoggedUser(token);
  };

  const deleteUser = async () => {
    await AsyncStorage.removeItem('accessToken');
    setIsLoggedUser(null);
  };

  useEffect(() => {
    getToken();
  }, []);

  if (menu_is_open) {
    return (
      <View style={styles.menuMainWrapper}>
        <View
          style={[
            styles.menuWrapper,
            is_logged_user !== null
              ? {flex: 1}
              : {height: '100%', maxHeight: 470},
          ]}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderText}>
              {translates.pages?.common?.menu}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setMenuIsOpen(false);
              }}>
              <Svg
                width={48}
                height={44}
                viewBox="0 0 48 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clipPath="url(#clip0_10820_21639)">
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.707 14.293a1 1 0 00-1.414 1.414L22.586 22l-6.293 6.293a1 1 0 001.414 1.414L24 23.414l6.293 6.293a1 1 0 001.414-1.414L25.414 22l6.293-6.293a1 1 0 00-1.414-1.414L24 20.586l-6.293-6.293z"
                    fill="#091334"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_10820_21639">
                    <Path
                      fill="#fff"
                      transform="translate(16 14)"
                      d="M0 0H16V16H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.menuContent}>
            {is_logged_user && (
              <Text style={styles.razdel_text}>
                {translates.pages?.home?.menu?.sections}
              </Text>
            )}

            <TouchableOpacity
              style={styles.menuContentItem}
              onPress={() => {
                props.navigation.navigate('HomeComponent');
              }}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M2.398 11.078h17.036l-4.384-4.5a.947.947 0 010-1.308.879.879 0 011.267 0l5.92 6.075c.35.36.35.94 0 1.3l-5.912 6.085a.879.879 0 01-1.266 0 .935.935 0 010-1.3l4.375-4.508H2.398A.913.913 0 011.5 12c0-.507.404-.922.898-.922z"
                  fill="#091334"
                />
              </Svg>
              <Text style={styles.menuContentItemText}>
                {translates.pages?.home?.menu?.general}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setMenuIsOpen(false);
                props.navigation.navigate('SearchComponent');
              }}
              style={styles.menuContentItem}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clipPath="url(#clip0_10820_32382)" fill="#091334">
                  <Path d="M8.321 13.119c0-.927-.525-1.584-1.576-1.584-1.051 0-1.577.657-1.577 1.584s.526 1.583 1.577 1.583c1.05 0 1.576-.656 1.576-1.583zM18.832 13.119c0-.927-.525-1.584-1.576-1.584-1.051 0-1.577.657-1.577 1.584s.526 1.583 1.577 1.583c1.05 0 1.576-.656 1.576-1.583z" />
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.851 2.5c-1.717 0-3.354 1.243-3.944 2.97C1.535 9.488 1.5 13.418 1.5 17.596c0 1.001.14 2.018.535 2.718.44.78 1.24 1.187 2.082 1.187.574 0 1.136-.16 1.594-.574.454-.41.8-1.074.92-1.674a.112.112 0 01.11-.089H17.26c.056 0 .1.041.109.089.12.6.467 1.265.92 1.674.46.414 1.021.574 1.595.574.841 0 1.547-.407 1.988-1.188.394-.699.628-1.716.628-2.717 0-4.178-.035-8.108-1.407-12.124-.59-1.728-2.226-2.971-3.944-2.971H6.851zm-2.08 3.664c.317-.926 1.146-1.548 2.08-1.548H17.15c.934 0 1.763.622 2.08 1.548 1.293 3.788 1.29 7.49 1.29 11.43 0 .865-.128 1.344-.26 1.578-.085.151-.167.212-.376.212-.245 0-.34-.064-.382-.101-.046-.042-.136-.155-.197-.457-.198-.985-1.013-1.78-1.948-1.78H6.644c-.935 0-1.75.795-1.948 1.78-.06.302-.151.415-.197.457-.041.037-.137.1-.382.1-.21 0-.291-.06-.377-.211-.131-.234-.258-.713-.258-1.577 0-3.94-.004-7.643 1.29-11.43z"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_10820_32382">
                    <Path
                      fill="#fff"
                      transform="translate(1.5 2.5)"
                      d="M0 0H21V19H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={styles.menuContentItemText}>
                {translates.pages?.common?.announcements}
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => {
                setMenuIsOpen(false);
                props.navigation.navigate('CatalogSelectMarkComponent');
              }}
              style={styles.menuContentItem}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clipPath="url(#clip0_10820_32531)">
                  <Path
                    d="M8.738 5.625a1 1 0 01.728.315l1.408 1.495a1 1 0 00.728.315h7.402a1 1 0 011 1v8.625a1 1 0 01-1 1h-14a1 1 0 01-1-1V6.625a1 1 0 011-1h3.734zm1.558-1.81a1 1 0 00-.728-.315H4c-1.1 0-1.99.956-1.99 2.125L2 18.375c0 1.169.9 2.125 2 2.125h16c1.1 0 2-.956 2-2.125V7.75c0-1.169-.9-2.125-2-2.125h-7.568a1 1 0 01-.728-.315l-1.408-1.495z"
                    fill="#091334"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_10820_32531">
                    <Path
                      fill="#fff"
                      transform="translate(2 3.5)"
                      d="M0 0H20V17H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={styles.menuContentItemText}>
                {translates.pages?.common?.catalog}
              </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity
              onPress={() => {
                setMenuIsOpen(false);
                props.navigation.navigate('JournalPage');
              }}
              style={styles.menuContentItem}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clipPath="url(#clip0_10820_32547)">
                  <Path
                    d="M13 20v1a1 1 0 11-2 0v-1H3a1 1 0 01-1-1V3a1 1 0 011-1h6a3.99 3.99 0 013 1.354A3.99 3.99 0 0115 2h6a1 1 0 011 1v16a1 1 0 01-1 1h-8zm6.5-2a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5H15a2.004 2.004 0 00-2 2v11.5a.5.5 0 00.5.5h6zm-9 0a.5.5 0 00.5-.5V6c0-.53-.21-1.035-.586-1.41A2.004 2.004 0 009 4H4.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h6z"
                    fill="#091334"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_10820_32547">
                    <Path
                      fill="#fff"
                      transform="translate(2 2)"
                      d="M0 0H20V20H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={styles.menuContentItemText}>
                {translates.pages?.common?.journal}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('CompanyScreen')}
              style={styles.menuContentItem}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clipPath="url(#clip0_10820_32406)">
                  <Path
                    d="M21 18.99c0 .006.005.01.01.01H22a1 1 0 110 2H2a1 1 0 110-2h.99a.01.01 0 00.01-.01V4a1 1 0 011-1h10a1 1 0 011 1v14.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-7.485a.015.015 0 00-.015-.015H17a1 1 0 110-2h3a1 1 0 011 1v8.99zM5.5 5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-7zM7 12a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1zm0-4a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1z"
                    fill="#091334"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_10820_32406">
                    <Path
                      fill="#fff"
                      transform="translate(1 3)"
                      d="M0 0H22V18H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={styles.menuContentItemText}>
                {translates.pages?.common?.company}
              </Text>
            </TouchableOpacity> */}

            {is_logged_user !== null && (
              <Text style={styles.razdel_text}>
                {translates.pages?.home?.menu?.sections_profile}
              </Text>
            )}

            {is_logged_user !== null && (
              <View style={{width: '100%'}}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('MyAnnouncements')}
                  style={styles.menuContentItem}>
                  <Svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M8 5.42c0-.58.47-1.05 1.05-1.05h10.9a1.05 1.05 0 110 2.1H9.05C8.47 6.47 8 6 8 5.42zM4.5 6.84c-.398 0-.78-.15-1.06-.416A1.383 1.383 0 013 5.42c0-.377.158-.738.44-1.004A1.544 1.544 0 014.5 4c.398 0 .78.15 1.06.416.282.266.44.627.44 1.004s-.158.738-.44 1.004a1.544 1.544 0 01-1.06.416zm0 6.627c-.398 0-.78-.15-1.06-.415A1.383 1.383 0 013 12.047c0-.376.158-.738.44-1.004a1.544 1.544 0 011.06-.416c.398 0 .78.15 1.06.416.282.267.44.628.44 1.004 0 .377-.158.738-.44 1.005a1.544 1.544 0 01-1.06.415zM4.5 20c-.398 0-.78-.15-1.06-.416A1.383 1.383 0 013 18.58c0-.377.158-.738.44-1.004a1.544 1.544 0 011.06-.416c.398 0 .78.15 1.06.416.282.266.44.627.44 1.004s-.158.738-.44 1.004A1.544 1.544 0 014.5 20zM8 12.045C8 11.468 8.468 11 9.045 11h10.91a1.045 1.045 0 010 2.09H9.045A1.045 1.045 0 018 12.045zm0 6.63c0-.577.468-1.045 1.045-1.045h10.91a1.045 1.045 0 010 2.09H9.045A1.045 1.045 0 018 18.675z"
                      fill="#091334"
                    />
                  </Svg>
                  <Text style={styles.menuContentItemText}>
                    {translates.pages?.common?.my_announcements}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('WalletScreen');
                  }}
                  style={styles.menuContentItem}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none">
                    <Mask
                      id="a"
                      maskUnits="userSpaceOnUse"
                      x={1.5}
                      y={2}
                      width={21}
                      height={20}
                      fill="#000">
                      <Path fill="#fff" d="M1.5 2H22.5V22H1.5z" />
                      <Path d="M19.33 7.135a.499.499 0 00.5-.5v-1.37a.5.5 0 00-.5-.5H4.67a.5.5 0 00-.5.5v13.47a.5.5 0 00.5.5h14.66a.5.5 0 00.5-.5v-1.37a.5.5 0 00-.5-.5h-7.023a1 1 0 01-.999-1v-7.73a1 1 0 011-1h7.023zM19.503 3c1.105 0 1.998.893 1.998 1.998v14.005A1.996 1.996 0 0119.501 21H4.5a2 2 0 01-2-2V4.997C2.5 3.892 3.394 3 4.498 3h15.004zM13.48 8.9a.5.5 0 00-.5.5v5.2a.5.5 0 00.5.5h5.85a.5.5 0 00.5-.5V9.4a.5.5 0 00-.5-.5h-5.85zm1.457 2.566a.5.5 0 01.5-.5h1.936a.5.5 0 01.5.5v1.068a.5.5 0 01-.5.5h-1.936a.5.5 0 01-.5-.5v-1.068z" />
                    </Mask>
                    <Path
                      d="M19.33 7.135a.499.499 0 00.5-.5v-1.37a.5.5 0 00-.5-.5H4.67a.5.5 0 00-.5.5v13.47a.5.5 0 00.5.5h14.66a.5.5 0 00.5-.5v-1.37a.5.5 0 00-.5-.5h-7.023a1 1 0 01-.999-1v-7.73a1 1 0 011-1h7.023zM19.503 3c1.105 0 1.998.893 1.998 1.998v14.005A1.996 1.996 0 0119.501 21H4.5a2 2 0 01-2-2V4.997C2.5 3.892 3.394 3 4.498 3h15.004zM13.48 8.9a.5.5 0 00-.5.5v5.2a.5.5 0 00.5.5h5.85a.5.5 0 00.5-.5V9.4a.5.5 0 00-.5-.5h-5.85zm1.457 2.566a.5.5 0 01.5-.5h1.936a.5.5 0 01.5.5v1.068a.5.5 0 01-.5.5h-1.936a.5.5 0 01-.5-.5v-1.068z"
                      fill="#091334"
                    />
                    <Path
                      d="M19.93 6.635v-1.37h-.2v1.37h.2zm-.6-1.97H4.67v.2h14.66v-.2zm-15.26.6v13.47h.2V5.265h-.2zm.6 14.07h14.66v-.2H4.67v.2zm15.26-.6v-1.37h-.2v1.37h.2zM12.878 9.4v5.202h.2V9.399h-.2zm.6 5.802h5.85V15h-5.85v.2zm6.45-.6V9.399h-.2v5.202h.2zm-.6-5.802h-5.85V9h5.85v-.2zm-3.893 2.267h1.936v-.2h-1.936v.2zm2.336.4v1.068h.2v-1.068h-.2zm-.4 1.468h-1.936v.2h1.936v-.2zm-2.336-.4v-1.068h-.2v1.068h.2zM4.498 3.1h15.004v-.2H4.498v.2zM21.4 4.998V19.003h.2v-.022-.022-.023-.022-.022-.023-.022-.023-.023-.022-.023-.023-.023-.023-.023-.023-.023-.023-.023-.024-.023-.024-.023-.024-.023-.024-.024-.024-.024-.023-.024-.024-.024-.025-.024-.024-.024-.025-.024-.024-.025-.025-.024-.025-.025-.024-.025-.025-.025-.025-.025-.025-.025-.026-.025-.025-.026-.025-.025-.026-.025-.026-.026-.025-.026-.026-.026-.026-.026-.026-.026-.026-.026-.026-.026-.026-.027-.026-.026-.027-.026-.027-.026-.027-.027-.026-.027-.027-.027-.027-.026-.027-.027-.028-.026-.028-.027-.027-.027-.027-.028-.027-.027-.028-.027-.028-.027-.028-.027-.028-.028-.027-.028-.028-.028-.028-.028-.027-.029-.027-.028-.028-.029-.028-.028-.028-.028-.029-.028-.028-.028-.029-.028-.029-.028-.029-.028-.029-.028-.029-.028-.03-.028-.029-.028-.03-.028-.029-.029-.028-.03-.028-.03-.028-.03-.028-.03-.028-.03-.029-.029-.029-.03-.028-.03-.029-.03-.028-.03-.03-.029-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.03-.029-.03-.029-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.03-.03-.03-.031-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.029-.03-.03-.03-.03-.029-.03-.03-.03-.029-.03-.03-.029-.03-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.03-.029-.029-.03-.029-.029-.03-.028-.03-.029-.03-.028-.03-.029-.029-.029-.029V9.3 9.27v-.029-.029-.029-.028-.03-.028-.029-.029-.029-.028-.029-.029-.028-.029-.029-.028-.029-.028-.029-.028-.029-.028-.028-.029-.028-.028-.028-.029-.028-.028-.028-.028-.028V8.3v-.028-.028-.028-.028-.028-.028-.027-.028-.028-.027-.028-.028-.027-.028-.027-.028-.027-.027-.028-.027-.027-.027-.028-.027-.027-.027-.027-.027-.027-.027-.027-.026-.027-.027-.027-.026-.027-.026-.027-.026-.027-.026-.026-.027-.026-.026-.026V7v-.026-.026-.026-.026-.026-.026-.026-.026-.025-.026-.025-.026-.026-.025-.025-.026-.025-.025-.025-.026-.025-.025-.025-.025-.024-.025-.025-.025-.024-.025-.025-.024-.025-.024-.024-.025-.024-.024-.024-.024-.024-.024-.024-.024-.024-.023-.024-.024-.023-.024-.023-.023-.024-.023-.023-.023-.023-.023-.023-.023-.023-.023-.023-.022-.023-.022-.023-.022-.022-.023-.022-.022-.022-.022-.022-.022-.022-.021-.022-.022-.021-.022-.021-.021h-.2zM19.501 20.9H4.5v.2H19.5v-.2zM2.6 19V4.997h-.2V19h.2zm9.708-11.765H19.33v-.2H12.309v.2zm-.9 8.63v-.013-.014-.013-.014-.014-.013-.014-.013-.014-.013-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.013-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.013-.014-.013-.014-.013-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.013-.014-.013-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.013-.014-.013-.014V15v-.014-.013-.014-.014-.013-.014-.013-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.014-.013-.014-.013-.014-.014-.013-.014-.014-.013-.014-.014-.013-.014-.014-.013-.014-.013-.014-.014-.013-.014-.014-.014-.013-.014-.014-.013-.014-.014-.013-.014-.014-.014-.013-.014-.014-.014-.013-.014-.014-.014-.013-.014-.014-.014-.014-.013-.014-.014-.014-.013-.014-.014-.014-.014-.014-.013-.014-.014-.014-.014-.014-.014-.013-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.013-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.014-.015-.014-.014-.014-.014-.014-.014-.014-.014-.014-.015-.014-.014-.014-.014-.014-.014-.015-.014-.014-.014-.015-.014-.014-.014-.014-.015-.014-.014-.015-.014-.014-.014-.015-.014-.014-.015-.014-.014-.015-.014-.015-.014-.014-.015-.014-.015-.014-.014-.015-.014-.015-.014-.015-.014-.015-.014-.015-.014-.015-.015-.014-.015-.014-.015-.014-.015-.015-.014-.015-.015-.014-.015-.015-.014-.015-.015-.015-.014-.015-.015-.015-.014-.015-.015-.015V12v-.014-.015-.015-.015-.015-.015-.015-.015-.014-.015-.015-.015-.015-.015-.015-.015-.015-.015-.015-.015-.016-.014-.016-.015-.015-.015-.015-.015-.015-.016-.015-.015-.015-.015-.016-.015-.015-.015-.016-.015-.015-.015-.016-.015-.016-.015-.015-.016-.015-.016-.015-.015-.016-.015-.016-.015-.016-.015-.016-.015-.016-.016-.015-.016-.015-.016-.016-.015-.016-.016-.016-.015-.016-.016-.015-.016-.016-.016-.016-.015-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.017-.016-.016-.016-.016-.017-.016-.016-.016-.017-.016-.016-.017-.016-.017-.016-.016-.017-.016-.017-.016-.017-.016-.017-.016-.017-.016-.017-.017-.016-.017-.017-.016-.017-.017-.016-.017-.017-.017-.016-.017-.017-.017-.017-.017-.017-.017-.017-.016-.017-.017-.017-.017-.018-.017-.017-.017-.017-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.017-.018-.017-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.017-.018-.018-.017-.018-.018-.017-.018-.018-.018-.018-.017-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.019-.018-.018-.018-.019-.018-.018-.019-.018-.018-.019-.018-.019-.018-.019-.018-.019-.018-.019-.018h-.2V15.865h.2zm7.922.9H12.307v.2H19.33v-.2zm-3.894-3.831a.4.4 0 01-.4-.4h-.2a.6.6 0 00.6.6v-.2zm2.336-.4a.4.4 0 01-.4.4v.2a.6.6 0 00.6-.6h-.2zm-.4-1.468a.4.4 0 01.4.4h.2a.6.6 0 00-.6-.6v.2zm-1.936-.2a.6.6 0 00-.6.6h.2a.4.4 0 01.4-.4v-.2zM19.929 9.4a.6.6 0 00-.6-.6V9c.221 0 .4.18.4.4h.2zm-.6 5.802a.6.6 0 00.6-.6h-.2a.4.4 0 01-.4.4v.2zm-6.45-.6a.6.6 0 00.6.6V15a.4.4 0 01-.4-.4h-.2zm.2-5.202c0-.22.179-.4.4-.4v-.2a.6.6 0 00-.6.6h.2zM4.499 2.9c-1.16 0-2.099.937-2.099 2.097h.2c0-1.05.849-1.897 1.898-1.897v-.2zm0 18A1.9 1.9 0 012.6 19h-.2c0 1.16.94 2.1 2.1 2.1v-.2zM21.4 19.003c0 1.05-.85 1.897-1.899 1.897v.2c1.16 0 2.099-.937 2.099-2.097h-.2zM19.502 3.1c1.05 0 1.898.848 1.898 1.898h.2c0-1.16-.938-2.098-2.098-2.098v.2zm-7.194 3.935a1.1 1.1 0 00-1.1 1.1h.2a.9.9 0 01.9-.9v-.2zm-1.1 8.83a1.1 1.1 0 001.1 1.1v-.2a.9.9 0 01-.9-.9h-.2zm8.721 1.5a.6.6 0 00-.599-.6v.2a.4.4 0 01.4.4h.2zm-.6 1.97a.6.6 0 00.6-.6h-.2a.4.4 0 01-.4.4v.2zm-15.258-.6a.6.6 0 00.6.6v-.2a.4.4 0 01-.4-.4h-.2zm.6-14.07a.6.6 0 00-.6.6h.2c0-.221.179-.4.4-.4v-.2zm15.258.6a.6.6 0 00-.6-.6v.2c.221 0 .4.179.4.4h.2zm-.2 1.37c0 .22-.178.4-.398.4v.2a.599.599 0 00.598-.6h-.2z"
                      fill="#091334"
                      mask="url(#a)"
                    />
                  </Svg>
                  <Text style={styles.menuContentItemText}>
                    {translates.pages?.common?.wallet}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setMenuIsOpen(false);
                    props.navigation.navigate('FavoritesComponent');
                  }}
                  style={styles.menuContentItem}>
                  <Svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M20.04 3.567C17.27 1.629 13.848 2.533 12 4.75c-1.847-2.218-5.269-3.133-8.04-1.184C2.49 4.6 1.567 6.344 1.504 8.186c-.147 4.177 3.464 7.525 8.974 12.661l.105.097a2.056 2.056 0 002.824-.01l.115-.108c5.51-5.125 9.11-8.474 8.974-12.651-.063-1.83-.986-3.575-2.456-4.608zm-7.935 15.676a.147.147 0 01-.21 0c-4.996-4.64-8.291-7.709-8.291-10.82 0-2.154 1.574-3.769 3.673-3.769 1.498 0 2.96.916 3.61 2.224a.55.55 0 00.483.317h1.269a.55.55 0 00.485-.32c.641-1.307 2.102-2.22 3.6-2.22 2.099 0 3.673 1.614 3.673 3.767 0 3.112-3.296 6.18-8.292 10.821z"
                      fill="#091334"
                    />
                  </Svg>
                  <Text style={styles.menuContentItemText}>
                    {translates.pages?.common?.favorites}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress={() => props.navigation.navigate('Comparisons')}
                  style={styles.menuContentItem}>
                  <Svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 10.29C4.5 6.835 7.36 4 10.927 4c3.567 0 6.427 2.834 6.427 6.29 0 3.458-2.86 6.292-6.427 6.292-3.567 0-6.427-2.834-6.427-6.291zM10.927 2C6.29 2 2.5 5.694 2.5 10.29c0 4.597 3.79 8.292 8.427 8.292 1.634 0 3.164-.46 4.459-1.255.045.08.101.154.17.22l4.244 4.167a1 1 0 101.4-1.427l-4.243-4.166a1.08 1.08 0 00-.02-.019 8.19 8.19 0 002.417-5.811c0-4.597-3.79-8.291-8.427-8.291z"
                      fill="#091334"
                    />
                    <Path
                      d="M11.954 9.155a.3.3 0 01-.285-.206l-.55-1.667a.3.3 0 00-.57 0L10 8.949a.3.3 0 01-.284.206H7.996a.3.3 0 00-.184.537l1.44 1.118a.3.3 0 01.102.328l-.534 1.681a.3.3 0 00.466.331l1.369-1.023a.3.3 0 01.36 0l1.368 1.023a.3.3 0 00.466-.33l-.534-1.682a.3.3 0 01.102-.328l1.44-1.118a.3.3 0 00-.184-.537h-1.719z"
                      fill="#091334"
                    />
                  </Svg>
                  <Text style={styles.menuContentItemText}>
                    {translates.pages?.home?.menu?.saved_search}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Comparisons')}
                  style={styles.menuContentItem}>
                  <Svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <G clipPath="url(#clip0_10842_32575)" fill="#091334">
                      <Rect x={11.094} y={1} width={2} height={22} rx={1} />
                      <Path d="M20.521 11.962a.3.3 0 01.3-.3h2.38a.3.3 0 01.3.3v.943a.3.3 0 01-.17.27l-2.38 1.144a.3.3 0 01-.43-.27v-2.087zM3.48 11.962a.3.3 0 00-.3-.3H.8a.3.3 0 00-.3.3v.943a.3.3 0 00.17.27l2.38 1.144a.3.3 0 00.43-.27v-2.087z" />
                      <Path d="M7.87 3.8a5.05 5.05 0 00-4.958 4.093l-.868 4.493v7.138a1.65 1.65 0 103.298 0v-.7H9.3a.5.5 0 00.5-.5v-1.1a.5.5 0 00-.5-.5H4.144v-4.137l.83-4.296A2.95 2.95 0 017.87 5.9H9.3a.5.5 0 00.5-.5V4.3a.5.5 0 00-.5-.5H7.87zM16.474 3.8a5.05 5.05 0 014.959 4.092l.867 4.494v7.137a1.65 1.65 0 11-3.298 0v-.7h-3.958a.5.5 0 01-.5-.5v-1.1a.5.5 0 01.5-.5H20.2v-4.136l-.83-4.296A2.95 2.95 0 0016.474 5.9h-1.43a.5.5 0 01-.5-.5V4.3a.5.5 0 01.5-.5h1.43z" />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_10842_32575">
                        <Path
                          fill="#fff"
                          transform="translate(.5 1)"
                          d="M0 0H23.0001V22H0z"
                        />
                      </ClipPath>
                    </Defs>
                  </Svg>
                  <Text style={styles.menuContentItemText}>
                    {translates.pages?.home?.menu?.compare}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => props.navigation.navigate('PostingAddFirst')}
              style={styles.menuContentItem}>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clipPath="url(#clip0_10842_32368)">
                  <Path
                    d="M12 6.5c-.605 0-1.1.495-1.1 1.1v3.3H7.6c-.605 0-1.1.495-1.1 1.1 0 .605.495 1.1 1.1 1.1h3.3v3.3c0 .605.495 1.1 1.1 1.1.605 0 1.1-.495 1.1-1.1v-3.3h3.3c.605 0 1.1-.495 1.1-1.1 0-.605-.495-1.1-1.1-1.1h-3.3V7.6c0-.605-.495-1.1-1.1-1.1zM12 1C5.928 1 1 5.928 1 12s4.928 11 11 11 11-4.928 11-11S18.072 1 12 1zm0 19.8c-4.851 0-8.8-3.949-8.8-8.8 0-4.851 3.949-8.8 8.8-8.8 4.851 0 8.8 3.949 8.8 8.8 0 4.851-3.949 8.8-8.8 8.8z"
                    fill="#FF7A00"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_10842_32368">
                    <Path
                      fill="#fff"
                      transform="translate(1 1)"
                      d="M0 0H22V22H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={[styles.menuContentItemText, {color: '#FF7A00'}]}>
                {translates.pages?.home?.menu?.creating_an_ad}
              </Text>
            </TouchableOpacity>

            {is_logged_user ? (
              <TouchableOpacity
                onPress={() => userLogout()}
                style={styles.menuContentItem}>
                <LogoutIcon />
                <Text style={[styles.menuContentItemText]}>
                  {translates.pages?.home?.menu?.logout}
                </Text>
              </TouchableOpacity>
            ) : (
              ''
            )}
          </ScrollView>

          <View style={styles.menuFooter}>
            {is_logged_user !== null ? (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('MyProfile')}
                style={styles.menuFooterButton}>
                <Text style={{color: '#091334'}}>Авраам Пет...</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('LoginComponent')}
                style={styles.menuFooterButton}>
                <Svg
                  style={{marginRight: 8}}
                  width={17}
                  height={22}
                  viewBox="0 0 17 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M16.25 20.5a1 1 0 11-2 0v-1a3 3 0 00-3-3h-6a3 3 0 00-3 3v1a1 1 0 11-2 0v-1a5 5 0 015-5h6a5 5 0 015 5v1zm-8-8a6 6 0 110-12.001 6 6 0 010 12.001zm0-2a4 4 0 100-8 4 4 0 000 8z"
                    fill="#091334"
                  />
                </Svg>
                <Text>{translates.pages?.home?.menu?.login}</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.menuFooterButton}>
              <Svg
                style={{marginRight: 8}}
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G
                  clipPath="url(#clip0_10820_30476)"
                  stroke="#091334"
                  strokeWidth={1.6}>
                  <Circle cx={10.25} cy={10} r={9.2} />
                  <Path d="M13.736 10.167c0 2.538-.466 4.885-1.19 6.569-.363.843-.775 1.483-1.193 1.9-.415.414-.788.564-1.103.564-.316 0-.688-.15-1.103-.564-.418-.417-.83-1.057-1.193-1.9-.724-1.684-1.19-4.03-1.19-6.57 0-2.538.466-4.974 1.195-6.747.366-.889.782-1.572 1.204-2.02C9.587.951 9.954.8 10.25.8c.296 0 .663.151 1.086.6.423.447.839 1.13 1.205 2.019.729 1.773 1.195 4.209 1.195 6.748zM1.344 9.59h18" />
                </G>
                <Defs>
                  <ClipPath id="clip0_10820_30476">
                    <Path
                      fill="#fff"
                      transform="translate(.25)"
                      d="M0 0H20V20H0z"
                    />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text style={{color: '#091334'}}>Русский</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      {active_page == 'Search' ? (
        <View style={styles.item}>
          <ActiveSearchPageSvg />
          <Text style={[styles.text, styles.activeText]}>
            {translates.pages?.common?.search}
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            props.navigation.navigate('SearchComponent');
          }}>
          <NotActiveSearchPageSvg />
          <Text style={styles.text}>{translates.pages?.common?.search}</Text>
        </TouchableOpacity>
      )}

      {active_page == 'Favorite' ? (
        <View style={styles.item}>
          <ActiveFavoritesPageSvg />
          <Text style={[styles.text, styles.activeText]}>
            {translates.pages?.common?.favorites}
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            props.navigation.navigate('FavoritesComponent');
          }}>
          <NotActiveFavoritesPageSvg />
          <Text style={styles.text}>{translates.pages?.common?.favorites}</Text>
        </TouchableOpacity>
      )}

      {active_page == 'iSell' ? (
        <View style={styles.item}>
          <ActiveISellPageSvg />
          <Text style={[styles.text, styles.activeText, margin]}>
            {translates.pages?.common?.sell}
          </Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.item}>
          <NotActiveISellPageSvg />
          <Text style={[styles.text, {color: '#2B65EE'}]}>
            {translates.pages?.common?.sell}
          </Text>
        </TouchableOpacity>
      )}

      {active_page == 'Messages' ? (
        <View style={styles.item}>
          <ActiveMessagesPageSvg />
          <Text style={[styles.text, styles.activeText]}>
            {translates.pages?.home?.bottom_menu?.chat}
          </Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.item}>
          <NotActiveMessagesPageSvg />
          <Text style={styles.text}>
            {translates.pages?.home?.bottom_menu?.chat}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          setMenuIsOpen(true);
        }}
        style={styles.item}>
        <NotActiveMenuPageSvg />
        <Text style={styles.text}>{translates.pages?.common?.menu}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 64,
    borderTopColor: 'silver',
    borderTopWidth: 1,
    paddingHorizontal: 16,
    // marginTop: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    color: '#6C7693',
    marginTop: 2,
  },

  activeText: {
    color: '#091334',
  },

  menuMainWrapper: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 11,
    paddingTop: 30,
    justifyContent: 'flex-end',
  },
  menuWrapper: {
    width: '100%',
    // height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  menuHeader: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
  },
  menuHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },

  menuFooter: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderTopColor: '#F0F1F4',
    borderTopWidth: 1,
  },

  menuFooterButton: {
    width: '48%',
    height: 48,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C4C8D4',
    borderWidth: 1,
  },

  menuContent: {
    paddingHorizontal: 16,
    flex: 1,
    width: '100%',
  },
  razdel_text: {
    marginVertical: 8,
    fontSize: 16,
    color: '#6C7693',
  },

  menuContentItem: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#F0F1F4',
    borderBottomWidth: 1,
  },
  menuContentItemText: {
    color: '#091334',
    fontSize: 18,
    paddingLeft: 12,
  },
});
