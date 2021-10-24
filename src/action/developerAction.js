import React from 'react';
import { GET_DEVELOPER, SET_LOADING, DEVELOPER_ERROR } from './type';

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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
