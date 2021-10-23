import React, { useState, useEffect } from 'react';
// import M from 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../action/logAction';
const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [developer, setDevelpoer] = useState('');
  const [attention, setAttention] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setDevelpoer(current.developer);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || developer === '') {
      M.toast({ html: 'Please fill the message and developer fields' });
    } else {
      const updateLogs = {
        id: current.id,
        message,
        developer,
        attention,
        date: new Date(),
      };

      updateLog(updateLogs);
      M.toast({ html: 'Log update' });
      setMessage('');
      setDevelpoer('');
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Developer Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Developer log
            </label>
          </div>
        </div>

        <div className="row">
          <div className="row-field">
            <select
              name="developer"
              value={developer}
              className="browser-default"
              onChange={(e) => setDevelpoer(e.target.value)}
            >
              <option value="">Select Developer</option>
              <option value="Ibrahim">Ibrahim</option>
              <option value="Ishq">Ishaq</option>
              <option value="ismail">Ismail</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  className="filled-in"
                  type="checkbox"
                  checked={attention}
                  name="attention"
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const maStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(maStateToProps, { updateLog })(EditLogModal);
