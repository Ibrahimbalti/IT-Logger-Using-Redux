import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDeveloper } from '../../action/developerAction';

const AddLogModal = ({ addDeveloper }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please fill the first and last name fields' });
    } else {
      const newdeveloper = {
        firstname,
        lastname,
      };

      addDeveloper(newdeveloper);
      M.toast({ html: 'developer add successfully' });
      setFirstname();
      setLastname();
    }
  };
  return (
    <div id="developer-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Developer </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="Firstname" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="lastname" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect  waves-blue btn-flat"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addDeveloper: PropTypes.func.isRequired,
};
export default connect(null, { addDeveloper })(AddLogModal);
