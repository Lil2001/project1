import {
  GET_COORDINATES_FOR_FIRST_LOAD_MAP,
  SET_FROM_COORDINATE_AND_NAME,
  SET_FROM_DEFINED,
  SEARCH_FROM_ADDRESS_LIST,
  EDIT_FROM_INPUT_VALUE,
  SET_FROM_COORDINATES_AFTER_CLICK_TO_ADDRESS_IN_SEARCH_RESULT,
  REPLACE_FROM_ADDRESS_NAME_WITH_RESERVE_FROM_ADDRESS_NAME,
} from '../actions/actions';

const initialState = {
  movies: [],
  favorites: [],
  coordinates_for_first_load_map: {
    map_coordinates: 0,
    user_coordinates: 0,
    first_point_coordinates: 0,
    mapReady: false,
  },
  from_coordinate_and_name: {
    from_coordinates: null, // {'longitude' : 48183138, 'latitude':48183138}
    from_address_name: '',
    reserve_from_address_name: '',
    defined: true,
    search_from_address_list: [],
  },

  home_map_condition: 'SET_MY_LOCATION', // SHOW_DIRECTION_AND_TARIFS_CARS   // указываем какую карту показать на главной 1) Карту с выбором локации пользователя или карту с проложенным маршрутом и быбором тарифа
  // home_map_condition: 'SHOW_DIRECTION_AND_TARIFS_CARS', // SET_MY_LOCATION   // указываем какую карту показать на главной 1) Карту с выбором локации пользователя или карту с проложенным маршрутом и быбором тарифа
};

function justDriveReducerOld(state = initialState, action) {
  switch (action.type) {
    case GET_COORDINATES_FOR_FIRST_LOAD_MAP:
      return {...state, coordinates_for_first_load_map: action.payload}; // Срабатывает при первом заходе на страницу карты и получает все кординаты

    case SET_FROM_COORDINATE_AND_NAME:
      return {...state, from_coordinate_and_name: action.payload}; // Сохраняет имя и кординаты для поля 'Откуда'

    case SEARCH_FROM_ADDRESS_LIST:
      let copy_from_coordinate_and_name1 = state.from_coordinate_and_name;
      copy_from_coordinate_and_name1.search_from_address_list = action.payload;
      return {
        ...state,
        from_coordinate_and_name: copy_from_coordinate_and_name1,
      };

    case EDIT_FROM_INPUT_VALUE:
      let copy_from_coordinate_and_name2 = state.from_coordinate_and_name;
      copy_from_coordinate_and_name2.from_address_name = action.payload;
      return {
        ...state,
        from_coordinate_and_name: copy_from_coordinate_and_name2,
      };

    case SET_FROM_COORDINATES_AFTER_CLICK_TO_ADDRESS_IN_SEARCH_RESULT:
      let copy_coordinates_for_first_load_map =
        state.coordinates_for_first_load_map;
      copy_coordinates_for_first_load_map.map_coordinates = action.payload;
      copy_coordinates_for_first_load_map.first_point_coordinates =
        action.payload;
      return {
        ...state,
        coordinates_for_first_load_map: copy_coordinates_for_first_load_map,
      };

    case REPLACE_FROM_ADDRESS_NAME_WITH_RESERVE_FROM_ADDRESS_NAME:
      let copy_from_coordinate_and_name3 = state.from_coordinate_and_name;
      let reserve_from_address_name =
        copy_from_coordinate_and_name3.reserve_from_address_name;

      copy_from_coordinate_and_name3.from_address_name =
        reserve_from_address_name;

      return {
        ...state,
        from_coordinate_and_name: copy_from_coordinate_and_name3,
      };

    case SET_FROM_DEFINED:
      let copy_from_coordinate_and_name = state.from_coordinate_and_name;
      copy_from_coordinate_and_name.defined = action.payload;
      return {
        ...state,
        from_coordinate_and_name: copy_from_coordinate_and_name,
      }; // При передвижение карты для определиения адреса 'ОТКУДА' мы меняем значение defined что бы в поле показать слово 'уточняю...'
    default:
      return state;
  }
}

export default justDriveReducer;
