import React from 'react';
import PropTypes from 'prop-types';

function HeaderStyle({ h, children }) {
  return (
    <div className={`bg-tailwind-green h-${h}`}>
      {children}
    </div>
  )
}


export default HeaderStyle;
