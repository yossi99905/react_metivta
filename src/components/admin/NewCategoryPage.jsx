import React from 'react'
import NavAdmin from './NavAdmin'
import FormNewCategory from './FormNewCategory'
function NewCategoryPage() {
  return (

    <div className='flex h-lvh justify-end'>
      <div className="w-lvw mx-9 my-32">
        <FormNewCategory />

      </div>



      <NavAdmin />


    </div>

  )
}

export default NewCategoryPage