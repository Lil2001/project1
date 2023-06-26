// import axios from 'axios';

// Define action types
import GetLocation from 'react-native-get-location';
export const GET_COORDINATES_FOR_FIRST_LOAD_MAP =
  'GET_COORDINATES_FOR_FIRST_LOAD_MAP';
export const SET_FROM_COORDINATE_AND_NAME = 'SET_FROM_COORDINATE_AND_NAME';
export const SET_FROM_DEFINED = 'SET_FROM_DEFINED';
export const SEARCH_FROM_ADDRESS_LIST = 'SEARCH_FROM_ADDRESS_LIST';
export const EDIT_FROM_INPUT_VALUE = 'EDIT_FROM_INPUT_VALUE';

export const SET_FROM_COORDINATES_AFTER_CLICK_TO_ADDRESS_IN_SEARCH_RESULT =
  'SET_FROM_COORDINATES_AFTER_CLICK_TO_ADDRESS_IN_SEARCH_RESULT';
export const REPLACE_FROM_ADDRESS_NAME_WITH_RESERVE_FROM_ADDRESS_NAME =
  'REPLACE_FROM_ADDRESS_NAME_WITH_RESERVE_FROM_ADDRESS_NAME';

export const getCoordinatesForFirstLoadMap = () => {
  try {
    return async dispatch => {
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          let set_coord = [location.longitude, location.latitude];

          dispatch({
            type: GET_COORDINATES_FOR_FIRST_LOAD_MAP,
            payload: {
              map_coordinates: set_coord,
              user_coordinates: set_coord,
              first_point_coordinates: set_coord,
              mapReady: true,
            },
          });
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message, 'useEffect ERROR');
        });
    };
  } catch (error) {}
};

export const searchFromAddressList = address => {
  try {
    return async dispatch => {
      let url = `https://photon.komoot.io/api/?lang=en&q=${address}`;

      console.log(url, 'search ADDRESS FROM');

      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          let response = resp.features;
          let result_resp = [];

          for (const responseKey in response) {
            if (response[responseKey].properties.countrycode == 'AM') {
              result_resp.push(response[responseKey]);
            }
          }

          dispatch({
            type: SEARCH_FROM_ADDRESS_LIST,
            payload: result_resp,
          });
          console.log(resp, 'SEARCH_FROM_ADDRESS_LIST');
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const editFromInputValue = from_data => dispatch => {
  console.log(from_data, 'EDIT_FROM_INPUT_VALUE ACTIONS');

  dispatch({
    type: EDIT_FROM_INPUT_VALUE,
    payload: from_data,
  });
};

export const setFromCoordinatesAfterClickToAddressInSearchResult =
  coordinates => dispatch => {
    console.log(
      coordinates,
      'setFromCoordinatesAfterClickToAddressInSearchResult ACTIONS',
    );

    dispatch({
      type: SET_FROM_COORDINATES_AFTER_CLICK_TO_ADDRESS_IN_SEARCH_RESULT,
      payload: coordinates,
    });
  };

export const replaceFromAddressNameWithReserveFromAddressName =
  () => dispatch => {
    dispatch({
      type: REPLACE_FROM_ADDRESS_NAME_WITH_RESERVE_FROM_ADDRESS_NAME,
      payload: null,
    });
  };

export const setFromDataCoordinate = from_data => dispatch => {
  console.log(from_data, 'setFromDataCoordinate ACTIONS');

  dispatch({
    type: SET_FROM_COORDINATE_AND_NAME,
    payload: from_data,
  });
};

export const setFromDefined = defined => dispatch => {
  console.log(defined, 'setFromDefined ACTIONS');

  dispatch({
    type: SET_FROM_DEFINED,
    payload: defined,
  });
};
