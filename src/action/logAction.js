import { GET_LOG, SET_LOADING, LOG_ERROR } from './type';

export const getLog = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('log');
    const data = res.json();
    dispatch({
      type: GET_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
