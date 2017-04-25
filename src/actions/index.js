import axios from 'axios';

const API_KEY = '';
const URL = '../src/data/';

export const GET_LOOP_DATA = 'GET_LOOP_DATA';
export const CHANGE_LOOP_TYPE = 'CHANGE_LOOP_TYPE';
export const SET_LOOP_STYLE = 'SET_LOOP_STYLE';


export function selectLoopType(type) {
  const request = axios.get(`${URL}${type.loopType}.json`)
    return {
      type: CHANGE_LOOP_TYPE,
      payload: request
    }
}


export function getLoopData() {
  const request = axios.get(`${URL}loop-data.json`)
    return {
      type: GET_LOOP_DATA,
      payload: request
    }
}

export function setLoopStyle(style) {
  return {
    type: SET_LOOP_STYLE,
    payload: style
  }
}
