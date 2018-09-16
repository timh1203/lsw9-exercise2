import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1. Import redux
import { combineReducers, createStore } from 'redux'

// 5. Combine all the reducers together
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

// 2. Create the store with combineReducers
// 6. Adding an initial state
// 7. Add Redux DevTools
const store = createStore(
  allReducers, 
  {
    products: [{
      name: 'iPhone'
    }],
    user: 'Michael'
  },
  window.devToolsExtension && window.devToolsExtension()
)

// 3. Create the root reducer and subreducers
function productsReducer(state = [], action) {
  return state
}

function userReducer(state = '', action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload.user
    default:
        return state
  }
}

// 4. Create an action
const updateUserAction = {
  type: "UPDATE_USER",
  payload: {
    user: 'John'
  }
}

store.dispatch(updateUserAction)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
