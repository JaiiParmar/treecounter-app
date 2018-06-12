import React from 'react';
import PropTypes from 'prop-types';

const Offline = ({ account }) => {
  return (
    <div>
      <label>Money Transfer</label>
      <form>
        <div>{account.full_text}</div>
        <div>Confirmation checkbox and submit button go here</div>
      </form>
    </div>
  );
};

Offline.propTypes = {
  account: PropTypes.object.isRequired,
  target: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  onFailure: PropTypes.func
};

export default Offline;
