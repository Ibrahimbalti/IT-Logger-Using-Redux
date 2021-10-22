import { GET_LOG, SET_LOADING, LOG_ERROR } from '../action/type';

const initailState = {
  logs: null,
  loading: false,
  current: null,
  error: null,
};

const logReducers = (state = initailState, action) => {
  switch (action.type) {
    case GET_LOG:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOG_ERROR:
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

export default logReducers;
