import { combineReducers } from 'redux';

const initialState = {
  counter: 0,
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const appReducer = combineReducers({
  initialReducer: initialReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
