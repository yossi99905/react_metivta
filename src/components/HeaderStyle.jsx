import React from 'react';



function HeaderStyle({ h, children,...props }) {

  return (
    <div className={`bg-tailwind-green ${h} flex  items-center`} {...props}>
      {children }
    </div>
  )
}


export default HeaderStyle;
