import React from 'react'

function HeaderForPage({ children, ...props}) {

    return (
        <div className={`bg-tailwind-green h-14 flex items-center space-x-2 pl-28 `} {...props}>
            {children}
        </div>
    )

}

export default HeaderForPage