const initialState = {
  searchFilterData: {},
  bodyTypeValue: [],
  driveUnitValue: [],
  handValue: [],
  engineCapacityValueFrom: 0,
  engineCapacityValueTo: 0,
  mileageFrom: 0,
  mileageTo: 0,
  yearIssueFrom: 0,
  yearIssueTo: 0,
  priceFilterFrom: 0,
  priceFilterTo: 0,
  enginesType: [],
  transmissionData: [],
  enginesTypeTag: [],
  transmissionDataTag: [],
  bodyTypeValueTag: [],
  driveUnitValueTag: [],
  handValueTag: [],

  //

  marksData: [],
  modelsData: [],
  generationData: [],
  modelName: '',
  markName: '',
  modelId: '',
  generationChechkedData: [],
  modelsCheckedData: [],
  marksCheckedData: [],

  //

  searchFilterDataNew: [],
  bodyTypeValueNew: [],
  driveUnitValueNew: [],
  handValueNew: [],
  engineCapacityValueFromNew: 0,
  engineCapacityValueToNew: 0,
  mileageFromNew: 0,
  mileageToNew: 0,
  yearIssueFromNew: 0,
  yearIssueToNew: 0,
  priceFilterFromNew: 0,
  priceFilterToNew: 0,
  enginesTypeNew: [],
  transmissionDataNew: [],
  bodyTypeValueNewTag: [],
  enginesTypeNewTag: [],
  driveUnitValueNewTag: [],
  transmissionDataNewTag: [],
  //

  marksDataNew: [],
  modelsDataNew: [],
  generationDataNew: [],
  modelNameNew: '',
  markNameNew: '',
  modelIdNew: '',
  generationChechkedDataNew: [],
  modelsCheckedDataNew: [],
  marksCheckedDataNew: [],

  ///

  marksDataSearchPageSmall: [],
  marksDataSearchPageBig: [],
  offersSearchData: [],
  offersSearchDataAmount: [],
  loading: true,
  error: null,
  newVehiclesData: [],
  newVehiclesDataWithOptions: [],
  isLastPage: false,
  loadingNew: true,
  amountData: [],
  pageNumber: 0,
  offersSearchDataWithOptions: [],
  vehicleData: [],
  arrayDataForMarksPage: [],
  arrayDataForNewMarksPage: [],
  nameData: [],
  emptyData: false,
};

function reducerSearch(state = initialState, action) {
  switch (action.type) {
    // Search filters
    case 'SEARCH_DATA':
      return {...state, searchFilterData: action.payload};
    case 'BODY_TYPE':
      return {...state, bodyTypeValue: action.payload};
    case 'DRIVE_UNIT':
      return {...state, driveUnitValue: action.payload};
    case 'HAND_VALUE':
      return {...state, handValue: action.payload};
    case 'ENGINE_CAPACiTY_FROM':
      return {...state, engineCapacityValueFrom: action.payload};
    case 'ENGINE_CAPACiTY_TO':
      return {...state, engineCapacityValueTo: action.payload};
    case 'MILEAGE_FROM':
      return {...state, mileageFrom: action.payload};
    case 'MILEAGE_TO':
      return {...state, mileageTo: action.payload};
    case 'YEAR_ISSUE_FROM':
      return {...state, yearIssueFrom: action.payload};
    case 'YEAR_ISSUE_TO':
      return {...state, yearIssueTo: action.payload};
    case 'PRICE_FILTER_FROM':
      return {...state, priceFilterFrom: action.payload};
    case 'PRICE_FILTER_TO':
      return {...state, priceFilterTo: action.payload};
    case 'ENGINES_TYPE':
      return {...state, enginesType: action.payload};
    case 'TRANSMISSION':
      return {...state, transmissionData: action.payload};

    // Marks Filter
    case 'MARKS_DATA':
      return {...state, marksData: action.payload};
    case 'MODEL_NAME':
      return {...state, modelName: action.payload};
    case 'MODELS_DATA':
      return {...state, modelsData: action.payload};
    case 'MARK_NAME':
      return {...state, markName: action.payload};
    case 'GENERATION_DATA':
      return {
        ...state,
        generationData: [
          ...state.generationData,
          {
            name: state.modelName,
            data: action.payload.success.records,
            model_id: state.modelId,
          },
        ],
      };
    case 'MODEL_ID':
      return {...state, modelId: action.payload};
    case 'GENERATION_CHECKED':
      return {...state, generationChechkedData: action.payload};
    case 'MODELS_CHECKED':
      return {...state, modelsCheckedData: action.payload};
    case 'MARKS_CHECKED':
      return {...state, marksCheckedData: action.payload};

    // New Filter
    case 'SEARCH_DATA_NEW':
      return {...state, searchFilterDataNew: action.payload};
    case 'BODY_TYPE_NEW':
      return {...state, bodyTypeValueNew: action.payload};
    case 'DRIVE_UNIT_NEW':
      return {...state, driveUnitValueNew: action.payload};
    case 'HAND_VALUE_NEW':
      return {...state, handValueNew: action.payload};
    case 'ENGINE_CAPACiTY_FROM_NEW':
      return {...state, engineCapacityValueFromNew: action.payload};
    case 'ENGINE_CAPACiTY_TO_NEW':
      return {...state, engineCapacityValueToNew: action.payload};
    case 'MILEAGE_FROM_NEW':
      return {...state, mileageFromNew: action.payload};
    case 'MILEAGE_TO_NEW':
      return {...state, mileageToNew: action.payload};
    case 'YEAR_ISSUE_FROM_NEW':
      return {...state, yearIssueFromNew: action.payload};
    case 'YEAR_ISSUE_TO_NEW':
      return {...state, yearIssueToNew: action.payload};
    case 'PRICE_FILTER_FROM_NEW':
      return {...state, priceFilterFromNew: action.payload};
    case 'PRICE_FILTER_TO_NEW':
      return {...state, priceFilterToNew: action.payload};
    case 'ENGINES_TYPE_NEW':
      return {...state, enginesTypeNew: action.payload};
    case 'TRANSMISSION_NEW':
      return {...state, transmissionDataNew: action.payload};

    //New Marks
    case 'MARKS_DATA_NEW':
      return {...state, marksDataNew: action.payload};
    case 'MODEL_NAME_NEW':
      return {...state, modelNameNew: action.payload};
    case 'MODELS_DATA_NEW':
      return {...state, modelsDataNew: action.payload};
    case 'MARK_NAME_NEW':
      return {...state, markNameNew: action.payload};
    case 'GENERATION_DATA_NEW':
      return {
        ...state,
        generationDataNew: [
          ...state.generationDataNew,
          {
            name: state.modelNameNew,
            data: action.payload.success.records,
            model_id: state.modelIdNew,
          },
        ],
      };
    case 'MODEL_ID_NEW':
      return {...state, modelIdNew: action.payload};
    case 'GENERATION_CHECKED_NEW':
      return {...state, generationChechkedDataNew: action.payload};
    case 'MODELS_CHECKED_NEW':
      return {...state, modelsCheckedDataNew: action.payload};
    case 'MARKS_CHECKED_NEW':
      return {...state, marksCheckedDataNew: action.payload};

    // for search page
    case 'MARKS_DATA_FOR_SEARCH_PAGE_SMALL':
      return {...state, marksDataSearchPageSmall: action.payload};
    case 'MARKS_DATA_FOR_SEARCH_PAGE_BIG':
      return {...state, marksDataSearchPageBig: action.payload};
    case 'FETCH_ITEMS_REQUEST':
      return {...state, loading: true};
    case 'FETCH_ITEMS_SUCCESS':
      // console.log(action.payload, 'payloaddd');
      return {
        ...state,
        loading: false,
        offersSearchData: [...state.offersSearchData, ...action.payload],
      };
    case 'FETCH_ITEMS_FAILURE':
      return {...state, loading: false, error: action.payload};
    case 'SEARCH_NEW_VEHICLES':
      return {...state, newVehiclesData: action.payload};
    case 'FETCH_ITEMS_REQUEST_NEW':
      return {...state, loadingNew: true};
    case 'FETCH_ITEMS_SUCCESS_NEW':
      return {
        ...state,
        loading: false,
        newVehiclesData: [...state.newVehiclesData, action.payload],
      };
    case 'FETCH_ITEMS_FAILURE_NEW':
      return {...state, loadingNew: false, error: action.payload};
    case 'FETCH_ITEMS_SUCCESS_NEW_AMOUNT':
      return {...state, amountData: action.payload};
    case 'BODY_TYPE_NEW_TAG':
      return {...state, bodyTypeValueNewTag: action.payload};
    case 'ENGINES_TYPE_NEW_TAG':
      return {...state, enginesTypeNewTag: action.payload};
    case 'DRIVE_UNIT_NEW_TAG':
      return {...state, driveUnitValueNewTag: action.payload};
    case 'TRANSMISSION_NEW_TAG':
      return {...state, transmissionDataNewTag: action.payload};
    case 'FETCH_ITEMS_REQUEST_NEW_OPTIONS':
      return {...state, loadingNew: true};
    case 'FETCH_ITEMS_SUCCESS_NEW_OPTION':
      return {
        ...state,
        loading: false,
        newVehiclesDataWithOptions: [
          ...state.newVehiclesDataWithOptions,
          action.payload,
        ],
      };
    case 'FETCH_ITEMS_FAILURE_NEW_OPTION':
      return {...state, loadingNew: false, error: action.payload};
    case 'PAGE':
      return {...state, pageNumber: action.payload};

    case 'AMOUNT':
      return {
        ...state,
        offersSearchDataAmount: action.payload,
      };

    case 'BODY_TYPE_VALUE_TAG':
      return {...state, bodyTypeValueTag: action.payload};
    case 'DRIVE_UNIT_VALUE_TAG':
      return {...state, driveUnitValueTag: action.payload};
    case 'ENGINES_TYPE_VALUE_TAG':
      return {...state, enginesTypeTag: action.payload};
    case 'HAND_VALUE_TAG':
      return {...state, handValueTag: action.payload};
    case 'TRANSMISSION_VALUE_TAG':
      return {...state, transmissionDataTag: action.payload};
    case 'FETCH_ITEMS_REQUEST_AMOUNT':
      return {...state, loading: true};
    case 'FETCH_ITEMS_SUCCESS_AMOUNT':
      return {
        ...state,
        loading: false,
        offersSearchDataWithOptions: [
          ...state.offersSearchDataWithOptions,
          ...action.payload,
        ],
      };

    case 'EMPTY_OFFERS_DATA':
      return {...state, emptyData: true, offersSearchDataWithOptions: []};
    case 'FETCH_ITEMS_FAILURE_AMOUNT':
      return {...state, loading: false, error: action.payload};
    case 'ADD_VEHICLE':
      return {...state, vehicleData: action.payload};
    case 'ADD_ARRAY_FOR_MARKS_SEARCH_PAGE':
      return {...state, arrayDataForMarksPage: action.payload};
    case 'ADD_ARRAY_FOR_MARKS_NEW_SEARCH_PAGE':
      return {...state, arrayDataForNewMarksPage: action.payload};
    case 'ADD_GEN_NAME':
      return {...state, nameData: action.payload};
    default:
      return state;
  }
}

export default reducerSearch;
