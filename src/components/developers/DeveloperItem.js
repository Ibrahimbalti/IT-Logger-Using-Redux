import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDeveloper } from '../../action/developerAction';
import M from 'materialize-css/dist/js/materialize.min.js';
const DeveloperItem = ({ developer, deleteDeveloper }) => {
  const deletedeveloper = () => {
    deleteDeveloper(developer.id);
    M.toast({ html: 'Delete sccessfully' });
  };
  return (
    <li className="collection-item">
      <div>
        {developer.firstname}
        {developer.lastname}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={deletedeveloper}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

DeveloperItem.propTypes = {
  developer: PropTypes.object.isRequired,
  deleteDeveloper: PropTypes.func.isRequired,
};

export default connect(null, { deleteDeveloper })(DeveloperItem);
