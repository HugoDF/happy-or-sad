import {
  UPDATE_TEXT,
  REQUEST_MOOD_ANALYSIS,
  RECEIVE_MOOD_ANALYSIS_SUCCESS,
  RECEIVE_MOOD_ANALYSIS_ERROR
} from '../actions';

const DEFAULT_STATE = {
  mood: 'unknown'
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case REQUEST_MOOD_ANALYSIS:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_MOOD_ANALYSIS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mood: action.mood
      };
    case RECEIVE_MOOD_ANALYSIS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.err
      }
    default:
      return state;
  }
}

export default rootReducer;
