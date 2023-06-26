import {GET_TRANSLATE} from '../actions/actionProfile';

const initialState = {
  translates: {},
};

function reducerProfile(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSLATE:
      return {...state, translates: action.payload};
    default:
      return state;
  }
}

export default reducerProfile;
