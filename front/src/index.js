import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import MainContext from './context/main'

// mobx store
import TagsStore from './store/tags'

import App from './App';
import './index.css';

let stores = {
  tags: TagsStore,
}

ReactDOM.render(

  <MainContext.Provider value={stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </MainContext.Provider>,
  document.getElementById('root')
);
