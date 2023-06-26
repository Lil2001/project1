const initialState = {
  priceData: [],
  allDataAboutCars: [],
  allDataAboutModification: [],
  allDataModificationKorpus: [],
  configurationData: [],
  modificationAndConfiguration: [],
  pathName: '',
  allDataforSinglePage: [],
  carName: '',
  bodyId: '',
  confId: '',
  modId: '',
  is_close_description_popup: false,
  is_open_description_popup: false,
  descText: '',
  offerName: '',
};

function reducerSearchTwo(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRICE':
      return {...state, priceData: action.payload};
    case 'GET_DATA_FOR_MODELS':
      return {...state, allDataAboutCars: action.payload};
    case 'GET_DATA_FOR_MODIFICATION':
      return {...state, allDataAboutModification: action.payload};
    case 'GET_All_DATA_FOR_MODIFICATION_PAGE':
      return {...state, allDataModificationKorpus: action.payload};
    case 'GET_All_DATA_FOR_CONFIGURATION':
      return {...state, configurationData: action.payload};
    case 'GET_DATA_FOR_MODIFICATION_AND_CONFIGURATION':
      return {...state, modificationAndConfiguration: action.payload};
    case 'PATH_FOR_CAR':
      return {...state, pathName: action.payload};
    case 'GET_All_DATA_FOR_SINGLE_PAGE':
      return {...state, allDataforSinglePage: action.payload};
    case 'NAME_FOR_CAR':
      return {...state, carName: action.payload};
    case 'BODY_ID_FOR_CAR':
      return {...state, bodyId: action.payload};
    case 'CONF_ID_FOR_CAR':
      return {...state, confId: action.payload};
    case 'MOD_ID_FOR_CAR':
      return {...state, modId: action.payload};
    case 'OPEN_DESCRIPTION_POPUP':
      return {...state, is_open_description_popup: true};
    case 'CLOSE_DESCRIPTION_POPUP':
      return {...state, is_open_description_popup: false};
    case 'DESCRIPTION_TEXT':
      return {...state, descText: action.payload};
    case 'OFFER_NAME_TEXT':
      return {...state, offerName: action.payload};
    default:
      return state;
  }
}

export default reducerSearchTwo;
