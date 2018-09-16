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
const store = createStore(
  allReducers, 
  {
    products: [{
      name: 'iPhone'
    }],
    user: 'Michael'
  }
)

// 3. Create the root reducer and subreducers
function productsReducer(state = [], action) {
  return state
}

function userReducer(state = '', action) {
  return state
}

// 4. Create an action
// const action = {
//   type: "CHANGE_STATE",
//   payload: {
//     newState: 'Change the state'
//   }
// }

// store.dispatch(action)
console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
