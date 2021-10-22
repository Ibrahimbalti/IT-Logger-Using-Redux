import React, { useEffect } from 'react';
import LogItems from './LogItems';
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLog } from '../../action/logAction';
const Logs = ({ log: { logs, loading }, getLog }) => {
  // const [log, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLog();
  }, []);

  if (loading || logs === null) {
    <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Developer Logs</h4>
      </li>
      {!loading && logs === null ? (
        <p className="center">There are currently no developer logs</p>
      ) : (
        logs.map((log) => <LogItems key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propsTypes = {
  log: PropTypes.object.isRequired,
  getLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLog })(Logs);
