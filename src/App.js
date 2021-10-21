import React, { Fragment, useEffect } from 'react';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import AddLogModal from './components/log/AddLogModal';
import EditLogModal from './components/log/EditLogModal';
import AddDeveloperModal from './components/developers/AddDeveloperModal';
import DeveloperListModal from './components/developers/DeveloperListModal';
import Logs from './components/log/Logs';
import AddBtn from './components/layout/AddBtn';
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
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddDeveloperModal />
        <Logs />
        <DeveloperListModal />
      </div>
    </Fragment>
  );
}

export default App;
