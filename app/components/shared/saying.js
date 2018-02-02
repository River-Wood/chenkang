import React from 'react';
import PropTypes from 'prop-types';

function Saying({ content }) {
  return <span style={{ margin: 0 }}>{content}</span>;
}

Saying.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Saying;
