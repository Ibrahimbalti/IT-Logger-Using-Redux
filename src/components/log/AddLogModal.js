import React, { useState } from 'react';

const AddLogModal = () => {
  const [message, setMessage] = useState();
  const [developer, setDevelpoer] = useState();
  const [attention, setAttention] = useState();

  const onSubmit = () => {
    console.log(message, developer, attention);
  };
  return (
    <div id="add-log-modal" className="modal">
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
          href="#"
          onClick={onSubmit}
          className="modal-close waves-effect  waves-blue btn-flat"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default AddLogModal;
