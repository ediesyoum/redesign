import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MediaQuery.scss';

const MediaQuery = (props) => {
  const { size, children } = props;
  return (
    <div className={`MediaQuery-${size}`}> {children} </div>
  );
};

// declare proptypes

MediaQuery.defaultProps = {
    size: 'mobile'
}

MediaQuery.propTypes = {
    size: PropTypes.oneOf(['mobile', 'desktop'])
}

export default MediaQuery;
