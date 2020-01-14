import React from 'react';
import Home from './views/Home';
//import Counters from './views/Counters'
import { Provider } from 'react-redux';
import store from './store';


function App() {
  //<Counters />
  return (
    <Provider store={store}>
      <div>
        <Home />
       
      </div>
    </Provider>
  );
}

export default App;
