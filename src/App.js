import React, { Fragment, useEffect } from 'react';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/log/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    //initailize Materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />

      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
