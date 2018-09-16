import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1. Create the store
import { createStore } from 'redux'
const store = createStore(reducer)

// 2. Create the root reducer
function reducer(state, action) {
  if (action.type === 'CHANGE_STATE') {
    return action.payload.newState
  }
  
  return 'State'
}

// 3. Create an action
const action = {
  type: "CHANGE_STATE",
  payload: {
    newState: 'Change the state'
  }
}

store.dispatch(action)
console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
