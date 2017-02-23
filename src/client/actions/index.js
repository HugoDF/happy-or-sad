import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const UPDATE_TEXT = 'UPDATE_TEXT';

export const REQUEST_MOOD_ANALYSIS = 'REQUEST_MOOD_ANALYSIS';
export const RECEIVE_MOOD_ANALYSIS_SUCCESS = 'RECEIVE_MOOD_ANALYSIS_SUCCESS';
export const RECEIVE_MOOD_ANALYSIS_ERROR = 'RECEIVE_MOOD_ANALYSIS_ERROR';

export function updateText(text) {
  return {
    type: UPDATE_TEXT,
    text
  };
}

function requestMoodAnalysis() {
  return {
    type: REQUEST_MOOD_ANALYSIS
  };
}
function receiveMoodAnalysisSuccess(mood) {
  return {
    type: RECEIVE_MOOD_ANALYSIS_SUCCESS,
    mood
  };
}
function receiveMoodAnalysisError(err) {
  return {
    type: RECEIVE_MOOD_ANALYSIS_ERROR,
    err
  };
}

export function fetchMoodAnalysis(text) {
  return (dispatch) => {
    dispatch(requestMoodAnalysis());
    axios
      .post(BASE_URL + '/rateMood', { text })
      .then(({ data }) => data)
      .then(({ mood }) => {
        dispatch(receiveMoodAnalysisSuccess(mood));
      })
      .catch((err) => {
        dispatch(receiveMoodAnalysisError(err));
      });
  }
}
