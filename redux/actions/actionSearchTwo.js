export const getPrices = path => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/mobile/new_vehicles/${path}/amount`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'GET_PRICE', payload: item});
        });
    } catch (error) {
      // dispatch({type: 'FETCH_ITEMS_FAILURE_NEW', payload: error});
    }
  };
};

export const getDataForModels = path => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/mobile/new_vehicles/${path}`;
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          size: ['500x500'],
        }),
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'GET_DATA_FOR_MODELS', payload: item});
        });
    } catch (error) {
      // dispatch({type: 'FETCH_ITEMS_FAILURE_NEW', payload: error});
    }
  };
};

export const getModificationData = (model_id, body_id) => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/bodies/mod_conf?translation=ru&mod_id=${model_id}&body_id=${body_id}`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'GET_DATA_FOR_MODIFICATION', payload: item});
        });
    } catch (error) {}
  };
};

export const getModificationPageAllData = path => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/bodies/${path}?translation=ru&size[]=355x355`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'GET_All_DATA_FOR_MODIFICATION_PAGE', payload: item});
        });
    } catch (error) {}
  };
};

export const getConfigurationData = id => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/bodies/${id}/configurations?translation=ru`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'GET_All_DATA_FOR_CONFIGURATION', payload: item});
        });
    } catch (error) {}
  };
};

export const getModificationAndConfigurationData = (
  model_id,
  body_id,
  conf_id,
) => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/bodies/mod_conf?translation=ru&mod_id=${model_id}&body_id=${body_id}&conf_id=${conf_id}`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({
            type: 'GET_DATA_FOR_MODIFICATION_AND_CONFIGURATION',
            payload: item,
          });
        });
    } catch (error) {}
  };
};

export const getPathForCar = path => dispatch => {
  dispatch({
    type: 'PATH_FOR_CAR',
    payload: path,
  });
};

export const getAllDataForSinglePage = id => {
  return async dispatch => {
    try {
      let url = `https://staging.autoboom.co.il/api/offers/${id}?translation=ru&articles=5&size[]=500x500`;
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await fetch(url, requestOptions)
        .then(resp => {
          return resp.json();
        })
        .then(item => {
          dispatch({type: 'GET_All_DATA_FOR_SINGLE_PAGE', payload: item});
        });
    } catch (error) {}
  };
};

export const getCarName = name => dispatch => {
  dispatch({
    type: 'NAME_FOR_CAR',
    payload: name,
  });
};

export const getBodyId = id => dispatch => {
  dispatch({
    type: 'BODY_ID_FOR_CAR',
    payload: id,
  });
};

export const getModId = id => dispatch => {
  dispatch({
    type: 'MOD_ID_FOR_CAR',
    payload: id,
  });
};
export const getConfId = id => dispatch => {
  dispatch({
    type: 'CONF_ID_FOR_CAR',
    payload: id,
  });
};

export const openDescriptionPopupForSearch = () => dispatch => {
  dispatch({
    type: 'OPEN_DESCRIPTION_POPUP',
    payload: null,
  });
};

export const closeDescriptionPopupForSearch = () => dispatch => {
  dispatch({
    type: 'CLOSE_DESCRIPTION_POPUP',
    payload: null,
  });
};

export const getDescText = text => dispatch => {
  dispatch({
    type: 'DESCRIPTION_TEXT',
    payload: text,
  });
};

export const getOfferName = text => dispatch => {
  dispatch({
    type: 'OFFER_NAME_TEXT',
    payload: text,
  });
};
