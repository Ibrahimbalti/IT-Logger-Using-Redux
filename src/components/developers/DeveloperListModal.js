import React, { useState, useEffect } from 'react';
import DeveloperItem from './DeveloperItem';

const DeveloperListModal = () => {
  const [developer, setDeveloper] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDeveloper();
  }, []);

  const getDeveloper = async () => {
    setLoading(true);
    const res = await fetch('developer');
    console.log(res);
    const data = await res.json();
    setDeveloper(data);
    setLoading(false);
  };

  return (
    <div className="modal" id="developer-list-modal">
      <div className="modal-content">
        <h4>Developer List</h4>
        <ul className="collection">
          {!loading &&
            developer.map((developer) => (
              <DeveloperItem key={developer.id} developer={developer} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DeveloperListModal;
