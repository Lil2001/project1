// Search Filter
export const searchData = () => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/offers/search_form?translation=ru`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'SEARCH_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

// new

export const searchDataNew = () => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/new_vehicles/search_form?translation=ru`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'SEARCH_DATA_NEW',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

// search data
export const addBodyTypeValue = body => dispatch => {
  dispatch({
    type: 'BODY_TYPE',
    payload: body,
  });
};

export const addDriveUnitValue = drive => dispatch => {
  dispatch({
    type: 'DRIVE_UNIT',
    payload: drive,
  });
};

export const addHandValues = hand => dispatch => {
  dispatch({
    type: 'HAND_VALUE',
    payload: hand,
  });
};

export const addEngineCapacityValueFrom = from => dispatch => {
  dispatch({
    type: 'ENGINE_CAPACiTY_FROM',
    payload: from,
  });
};

export const addEngineCapacityValueTo = to => dispatch => {
  dispatch({
    type: 'ENGINE_CAPACiTY_TO',
    payload: to,
  });
};

export const addtypeOfDrive = type => dispatch => {
  dispatch({
    type: 'TYPE_OF_DRIVE',
    payload: type,
  });
};

export const addTransmission = transmission => dispatch => {
  dispatch({
    type: 'TRANSMISSION',
    payload: transmission,
  });
};

export const addEnginesType = type => dispatch => {
  dispatch({
    type: 'ENGINES_TYPE',
    payload: type,
  });
};

export const addMileageFrom = from => dispatch => {
  dispatch({
    type: 'MILEAGE_FROM',
    payload: from,
  });
};

export const addMileageTo = to => dispatch => {
  dispatch({
    type: 'MILEAGE_TO',
    payload: to,
  });
};

export const addYearIssueFrom = from => dispatch => {
  dispatch({
    type: 'YEAR_ISSUE_FROM',
    payload: from,
  });
};

export const addYearIssueTo = to => dispatch => {
  dispatch({
    type: 'YEAR_ISSUE_TO',
    payload: to,
  });
};

export const addPriceFilterFrom = from => dispatch => {
  dispatch({
    type: 'PRICE_FILTER_FROM',
    payload: from,
  });
};

export const addPriceFilterTo = to => dispatch => {
  dispatch({
    type: 'PRICE_FILTER_TO',
    payload: to,
  });
};

// Marks filter

export const getMarksData = () => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/marks?translation=ru&filter[amount]=10000&filter[has_offers]=Y`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MARKS_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getModelsData = markId => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/models?translation=ru&filter[amount]=10000&filter[has_offers]=Y&filter[mark_id]=${markId}`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MODELS_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getGenerationData = modelId => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/generations?translation=ru&filter[amount]=10000&filter[has_offers]=Y&filter[model_id]=${modelId}`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GENERATION_DATA',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const addModelName = name => dispatch => {
  dispatch({
    type: 'MODEL_NAME',
    payload: name,
  });
};

export const addMarkName = name => dispatch => {
  dispatch({
    type: 'MARK_NAME',
    payload: name,
  });
};

export const addModelId = id => dispatch => {
  dispatch({
    type: 'MODEL_ID',
    payload: id,
  });
};

export const addGeneretionChechked = name => dispatch => {
  dispatch({
    type: 'GENERATION_CHECKED',
    payload: name,
  });
};

export const addModelChechked = name => dispatch => {
  dispatch({
    type: 'MODELS_CHECKED',
    payload: name,
  });
};

export const addMarksChechked = name => dispatch => {
  dispatch({
    type: 'MARKS_CHECKED',
    payload: name,
  });
};

// marks filter New

export const getMarksDataNew = () => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/marks?translation=ru&filter[amount]=10000&filter[has_new_vehicles]=Y`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MARKS_DATA_NEW',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getModelsDataNew = markId => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/models?translation=ru&filter[amount]=10000&filter[has_new_vehicles]=Y&filter[mark_id]=${markId}`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MODELS_DATA_NEW',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getGenerationDataNew = modelId => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/generations?translation=ru&filter[amount]=10000&filter[has_new_vehicles]=Y&filter[model_id]=${modelId}`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'GENERATION_DATA_NEW',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const addModelNameNew = name => dispatch => {
  dispatch({
    type: 'MODEL_NAME_NEW',
    payload: name,
  });
};

export const addMarkNameNew = name => dispatch => {
  dispatch({
    type: 'MARK_NAME_NEW',
    payload: name,
  });
};

export const addModelIdNew = id => dispatch => {
  dispatch({
    type: 'MODEL_ID_NEW',
    payload: id,
  });
};

export const addGeneretionChechkedNew = name => dispatch => {
  dispatch({
    type: 'GENERATION_CHECKED_NEW',
    payload: name,
  });
};

export const addModelChechkedNew = name => dispatch => {
  dispatch({
    type: 'MODELS_CHECKED_NEW',
    payload: name,
  });
};

export const addMarksChechkedNew = name => dispatch => {
  dispatch({
    type: 'MARKS_CHECKED_NEW',
    payload: name,
  });
};

// search data new

export const addBodyTypeValueNew = body => dispatch => {
  dispatch({
    type: 'BODY_TYPE_NEW',
    payload: body,
  });
};

export const addDriveUnitValueNew = drive => dispatch => {
  dispatch({
    type: 'DRIVE_UNIT_NEW',
    payload: drive,
  });
};

export const addHandValuesNew = hand => dispatch => {
  dispatch({
    type: 'HAND_VALUE_NEW',
    payload: hand,
  });
};

export const addEngineCapacityValueFromNew = from => dispatch => {
  dispatch({
    type: 'ENGINE_CAPACiTY_FROM_NEW',
    payload: from,
  });
};

export const addEngineCapacityValueToNew = to => dispatch => {
  dispatch({
    type: 'ENGINE_CAPACiTY_TO_NEW',
    payload: to,
  });
};

export const addtypeOfDriveNew = type => dispatch => {
  dispatch({
    type: 'TYPE_OF_DRIVE_NEW',
    payload: type,
  });
};

export const addTransmissionNew = transmission => dispatch => {
  dispatch({
    type: 'TRANSMISSION_NEW',
    payload: transmission,
  });
};

export const addEnginesTypeNew = type => dispatch => {
  dispatch({
    type: 'ENGINES_TYPE_NEW',
    payload: type,
  });
};

export const addMileageFromNew = from => dispatch => {
  dispatch({
    type: 'MILEAGE_FROM_NEW',
    payload: from,
  });
};

export const addMileageToNew = to => dispatch => {
  dispatch({
    type: 'MILEAGE_TO_NEW',
    payload: to,
  });
};

export const addYearIssueFromNew = from => dispatch => {
  dispatch({
    type: 'YEAR_ISSUE_FROM_NEW',
    payload: from,
  });
};

export const addYearIssueToNew = to => dispatch => {
  dispatch({
    type: 'YEAR_ISSUE_TO_NEW',
    payload: to,
  });
};

export const addPriceFilterFromNew = from => dispatch => {
  dispatch({
    type: 'PRICE_FILTER_FROM_NEW',
    payload: from,
  });
};

export const addPriceFilterToNew = to => dispatch => {
  dispatch({
    type: 'PRICE_FILTER_TO_NEW',
    payload: to,
  });
};

export const getMarksDataForSearchPageSmall = amount => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/marks?translation=ru&filter[amount]=${amount}&filter[has_offers]=Y&order[offers_amount]=desc`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MARKS_DATA_FOR_SEARCH_PAGE_SMALL',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getMarksDataForSearchPageBig = amount => {
  try {
    return async dispatch => {
      let url = `https://staging.autoboom.co.il/api/mobile/marks?translation=ru&filter[amount]=${amount}&filter[has_offers]=Y&order[offers_amount]=desc`;
      fetch(url)
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          dispatch({
            type: 'MARKS_DATA_FOR_SEARCH_PAGE_BIG',
            payload: resp,
          });
        })
        .catch(err => console.error(err));
    };
  } catch (error) {}
};

export const getOffersSearch = page => {
  return async dispatch => {
    dispatch({type: 'FETCH_ITEMS_REQUEST'});

    try {
      let url = `https://staging.autoboom.co.il/api/offers/search_sphinx`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articles: 0,
          filter: {
            page: page,
            amount: 20,
            vehicles: [],
            otype_id: 1,
          },
          amount: 20,
          otype_id: 1,
          page: page,
          vehicles: [],
          obj_type: 'search_all_vehicles',
          size: ['500x500'],
          translation: 'ru',
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          // console.log('FETCH_ITEMS_SUCCESS', item);
          dispatch({
            type: 'FETCH_ITEMS_SUCCESS',
            payload: item.success.records,
          });
        });
    } catch (error) {
      dispatch({type: 'FETCH_ITEMS_FAILURE', payload: error});
    }
  };
};

export const getNewVehicles = page => {
  return async dispatch => {
    dispatch({type: 'FETCH_ITEMS_REQUEST_NEW'});
    try {
      let url = `https://staging.autoboom.co.il/api/mobile/new_vehicles`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articles: 0,
          filter: {
            page: page,
            amount: 20,
            vehicles: [],
          },
          obj_type: 'search_new_vehicles',
          size: ['500x500'],
          translation: 'ru',
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({
            type: 'FETCH_ITEMS_SUCCESS_NEW',
            payload: item.success.records,
          });
        });
    } catch (error) {
      dispatch({type: 'FETCH_ITEMS_FAILURE_NEW', payload: error});
    }
  };
};

export const getNewVehiclesWithOptions = (
  page,
  price_from,
  price_to,
  engineCapacityValueFrom,
  engineCapacityValueTo,
  body_type,
  engines_type,
  transmission,
  type_of_drive,
) => {
  return async dispatch => {
    dispatch({type: 'FETCH_ITEMS_REQUEST_NEW_OPTION'});

    try {
      let url = `https://staging.autoboom.co.il/api/mobile/new_vehicles`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articles: 0,
          filter: {
            amount: 20,
            vehicles: [],
            page: page,
            price_from: price_from !== 0 ? price_from : 250000,
            price_to: price_to !== 0 ? price_to : 1000000,
            body_type: body_type,
            transmission: transmission,
            type_of_drive: type_of_drive,
            engines_type: engines_type,
            engine_capacity_from: engineCapacityValueFrom,
            engine_capacity_to: engineCapacityValueTo,
          },
          obj_type: 'search_new_vehicles',
          size: ['500x500'],
          translation: 'ru',
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'FETCH_ITEMS_SUCCESS_NEW_OPTION', payload: item});
        });
    } catch (error) {
      dispatch({type: 'FETCH_ITEMS_FAILURE_NEW_OPTION', payload: error});
    }
  };
};

export const getNewVehiclesAmount = (
  page,
  engineCapacityValueFrom,
  engineCapacityValueTo,
  price_from,
  price_to,
  body_type,
  engines_type,
  transmission,
  type_of_drive,
) => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/mobile/new_vehicles/amount`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articles: 0,
          filter: {
            page: page,
            amount: 0,
            engine_capacity_from: engineCapacityValueFrom
              ? engineCapacityValueFrom
              : 0,
            engine_capacity_to: engineCapacityValueTo
              ? engineCapacityValueTo
              : 0,
            price_from: price_from ? price_from : 0,
            price_to: price_to ? price_to : 0,
            vehicles: ['string'],
            body_type: body_type.length > 0 ? body_type : '',
            engines_type: engines_type.length > 0 ? engines_type : '',
            transmission: transmission.length > 0 ? transmission : '',
            type_of_drive: type_of_drive.length > 0 ? type_of_drive : '',
          },
          size: ['500x500'],
          translation: 'ru',
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'FETCH_ITEMS_SUCCESS_NEW_AMOUNT', payload: item});
        });
    } catch (error) {}
  };
};

export const addBodyTypeValueNewTag = body => dispatch => {
  dispatch({
    type: 'BODY_TYPE_NEW_TAG',
    payload: body,
  });
};

export const addEnginesTypeValueNewTag = body => dispatch => {
  dispatch({
    type: 'ENGINES_TYPE_NEW_TAG',
    payload: body,
  });
};

export const addDriveUnitNewTag = body => dispatch => {
  dispatch({
    type: 'DRIVE_UNIT_NEW_TAG',
    payload: body,
  });
};

export const addTransmissionNewTag = body => dispatch => {
  dispatch({
    type: 'TRANSMISSION_NEW_TAG',
    payload: body,
  });
};

export const getOffersDataWithAmountEmpty = () => dispatch => {
  dispatch({
    type: 'EMPTY_OFFERS_DATA',
    payload: null,
  });
};

export const addPage = page => dispatch => {
  dispatch({
    type: 'PAGE',
    payload: page,
  });
};

export const addPageOffers = page => dispatch => {
  dispatch({
    type: 'PAGE_OFFERS',
    payload: page,
  });
};

export const getOffersSearchAmount = (
  page,
  engineCapacityValueFrom,
  engineCapacityValueTo,
  price_from,
  price_to,
  body_type,
  engines_type,
  transmission,
  type_of_drive,
  yearIssueFrom,
  yearIssueTo,
  handData,
  mileage_from,
  mileage_to,
  vehicleData,
) => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/mobile/offers/search_sphinx_amount`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articles: 0,
          filter: {
            page: 0,
            amount: 20,
            otype_id: 1,
            engine_capacity_from: engineCapacityValueFrom,
            engine_capacity_to: engineCapacityValueTo,
            price_from: price_from,
            price_to: price_to,
            body_type: body_type,
            engines_type: engines_type,
            transmission: transmission,
            type_of_drive: type_of_drive,
            production_year_from: '',
            production_year_to: '',
            which_owner: handData,
            mileage_from: mileage_from,
            mileage_to: mileage_to,
            vehicles: vehicleData,
          },
          amount: 20,
          otype_id: 1,
          page: 1,
          vehicles: [],
          obj_type: 'search_all_vehicles',
          size: ['500x500'],
          translation: 'ru',
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'AMOUNT', payload: item});
        });
    } catch (error) {}
  };
};

export const getOffersSearchAmountData = (
  page,
  engineCapacityValueFrom,
  engineCapacityValueTo,
  price_from,
  price_to,
  body_type,
  engines_type,
  transmission,
  type_of_drive,
  yearIssueFrom,
  yearIssueTo,
  handData,
  mileage_from,
  mileage_to,
  vehicleData,
) => {
  return async dispatch => {
    dispatch({type: 'FETCH_ITEMS_REQUEST_AMOUNT'});
    try {
      let url = `https://staging.autoboom.co.il/api/mobile/offers/search_sphinx`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articles: 0,
          filter: {
            page: page,
            amount: 20,
            otype_id: 1,
            engine_capacity_from: engineCapacityValueFrom,
            engine_capacity_to: engineCapacityValueTo,
            price_from: price_from,
            price_to: price_to,
            body_type: body_type,
            engines_type: engines_type,
            transmission: transmission,
            type_of_drive: type_of_drive,
            production_year_from: '',
            production_year_to: '',
            which_owner: handData,
            mileage_from: mileage_from,
            mileage_to: mileage_to,
            vehicles: vehicleData,
          },
          amount: 20,
          otype_id: 1,
          page: page,
          vehicles: vehicleData,
          obj_type: 'search_all_vehicles',
          size: ['500x500'],
          translation: 'ru',
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({
            type: 'FETCH_ITEMS_SUCCESS_AMOUNT',
            payload: item.success.records,
          });
        });
    } catch (error) {
      dispatch({type: 'FETCH_ITEMS_FAILURE_AMOUNT', payload: error});
    }
  };
};

export const addBodyTypeValueTag = body => dispatch => {
  dispatch({
    type: 'BODY_TYPE_VALUE_TAG',
    payload: body,
  });
};

export const addDriveUnitTag = body => dispatch => {
  dispatch({
    type: 'DRIVE_UNIT_VALUE_TAG',
    payload: body,
  });
};

export const addEnginesTypeTag = body => dispatch => {
  dispatch({
    type: 'ENGINES_TYPE_VALUE_TAG',
    payload: body,
  });
};

export const addHandValueTag = body => dispatch => {
  dispatch({
    type: 'HAND_VALUE_TAG',
    payload: body,
  });
};

export const addTransmissionTag = body => dispatch => {
  dispatch({
    type: 'TRANSMISSION_VALUE_TAG',
    payload: body,
  });
};

export const addRequestVehicles = tag => dispatch => {
  dispatch({
    type: 'ADD_VEHICLE',
    payload: tag,
  });
};

export const addArrayForMarksSearchPage = body => dispatch => {
  dispatch({
    type: 'ADD_ARRAY_FOR_MARKS_SEARCH_PAGE',
    payload: body,
  });
};

export const addArrayForMarksNewSearchPage = body => dispatch => {
  dispatch({
    type: 'ADD_ARRAY_FOR_MARKS_NEW_SEARCH_PAGE',
    payload: body,
  });
};

export const addNamesGeneration = name => dispatch => {
  dispatch({
    type: 'ADD_GEN_NAME',
    payload: name,
  });
};
