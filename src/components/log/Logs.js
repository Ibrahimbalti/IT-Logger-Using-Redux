import React, { useState, useEffect } from 'react';
import LogItems from './LogItems';
import Preloader from '../layout/Preloader';
const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLog();
  }, []);

  const getLog = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Developer Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">There are currently no developer logs</p>
      ) : (
        logs.map((log) => <LogItems key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
