import {
  GET_DEVELOPER,
  SET_LOADING,
  DEVELOPER_ERROR,
  ADD_DEVELOPER,
} from '../action/type';

const initailState = {
  developer: null,
  loading: false,
  error: null,
};

const developerReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_DEVELOPER:
      return {
        ...state,
        developer: action.payload,
        loading: false,
      };

    case ADD_DEVELOPER:
      return {
        developer: [...state.developer, action.payload],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case DEVELOPER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default developerReducer;
