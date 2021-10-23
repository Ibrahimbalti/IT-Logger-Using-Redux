import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog } from '../../action/logAction';
import M from 'materialize-css/dist/js/materialize.min.js';
const LogItems = ({ log, deleteLog }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Delete' });
  };
  return (
    <li className="collection-item">
      <div>
        {/* edit log modal is id to open new page and modal-trigger to use to open the modal like edit log modal */}
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span>
          ID#{log.id}last update by {log.developer}
          <Moment format=" MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        {/* secondary-content to left side pa lya jayta ha */}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItems.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItems);
