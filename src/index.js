import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1. Import redux
// 8. Import Provider
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'

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

// 4. Create an action

// store.dispatch(updateUserAction)

ReactDOM.render(<Provider store={store}><App randomProp="random" /></Provider>, document.getElementById('root'));
registerServiceWorker();
