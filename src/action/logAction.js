import {
  GET_LOG,
  SET_LOADING,
  LOG_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOG,
} from './type';

export const getLog = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('log');
    const data = await res.json();
    console.log('log dev', data);
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

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('log', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('check res', res);
    const data = await res.json();
    console.log('chek now', data);

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`log/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.data,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`log/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.data,
    });
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = (log) => {
  return {
    type: CLEAR_CURRENT,
  };
};
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const searchLog = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`log?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.data,
    });
  }
};
