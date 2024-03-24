import React from 'react'
import NavAdmin from './NavAdmin'
function NewCategoryPage() {
  return (
    <div>
        <div className='grid grid-cols-4 h-lvh'>
            <div className="col-span-3 grid grid-cols-2 gap-4 my-32">
                NewCategoryPage
              
            </div>

            <div className='col-span-1'>

                <NavAdmin />
            </div>

        </div>
    </div>
  )
}

export default NewCategoryPage