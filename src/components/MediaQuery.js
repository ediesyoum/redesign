import React, { PropTypes } from 'react';
import '../styles/media-query.scss';

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
    size: React.PropTypes.oneOf(['mobile', 'desktop'])
}

export default MediaQuery;
