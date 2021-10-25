import {
  GET_DEVELOPER,
  SET_LOADING,
  DEVELOPER_ERROR,
  ADD_DEVELOPER,
  DELETE_DEVELOPER,
} from './type';

export const getDeveloper = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('developer');
    const data = await res.json();
    console.log('list of developer', data);
    dispatch({
      type: GET_DEVELOPER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DEVELOPER_ERROR,
      payload: err.response.data,
    });
  }
};

export const addDeveloper = (developer) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('developer', {
      method: 'POST',
      body: JSON.stringify(developer),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('developer Action is ', res);
    const data = await res.json();
    console.log('chek now', data);

    dispatch({
      type: ADD_DEVELOPER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DEVELOPER_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteDeveloper = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`developer/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_DEVELOPER,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: DEVELOPER_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
