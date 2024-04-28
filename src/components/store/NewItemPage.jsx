import React from 'react'
import NavStore from './NavStore'
import NewItemForm from './NewItemForm'

function NewItemPage() {
  return (
    <div className='flex h-lvh justify-end'>     
            <div className="col-span-3 gap-4 my-32 w-lvw mx-9">
                <div className='w-full h-full'>
                    {/* <SuccesMessage name={"השם נשמר בהצלחה"} onClickBtn={() => setbollSucces(!bollSucces)} show={bollSucces} /> */}
                    <NewItemForm/>
                </div>
           

            </div>



            <NavStore />


        </div>
  )
}

export default NewItemPage