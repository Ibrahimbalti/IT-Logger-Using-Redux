import { GET_LOG, SET_LOADING, LOG_ERROR } from './type';

export const getLog = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('log');
    const data = await res.json();
    console.log('jjjjhhh', data);
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
