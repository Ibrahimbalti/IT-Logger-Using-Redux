import React, { useEffect } from 'react';
import DeveloperItem from './DeveloperItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDeveloper } from '../../action/developerAction';
import Preloader from '../layout/Preloader';

const DeveloperListModal = ({
  developer: { developer, loading },
  getDeveloper,
}) => {
  // const [developer, setDeveloper] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDeveloper();
    //eslint-disable-next-line
  }, []);

  if (loading || developer === null) {
    <Preloader />;
  }
  // const getDeveloper = async () => {
  //   setLoading(true);
  //   const res = await fetch('developer');
  //   console.log(res);
  //   const data = await res.json();
  //   setDeveloper(data);
  //   setLoading(false);
  // };

  return (
    <div className="modal" id="developer-list-modal">
      <div className="modal-content">
        <h4>Developer List</h4>
        <ul className="collection">
          {/* {!loading &&
            developer ===
              null(
                developer.map((developer) => (
                  <DeveloperItem key={developer.id} developer={developer} />
                ))
              )} */}

          {!loading && developer === null ? (
            <p className="center">There are currently no developer logs</p>
          ) : (
            developer.map((developer) => (
              <DeveloperItem key={developer.id} developer={developer} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

DeveloperListModal.propTypes = {
  developer: PropTypes.object.isRequired,
  getDeveloper: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  developer: state.developer,
});

export default connect(mapStateToProps, { getDeveloper })(DeveloperListModal);
