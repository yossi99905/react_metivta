import React, { useState } from 'react'
import FormNewUser from '../components/FormNewUser'
import SuccesMessage from '../components/SuccesMessage'

function AdminPage() {
  const [bollSucces, setbollSucces] = useState(false)
  return (
    <div className='pt-24 h-lvh'>
      <SuccesMessage name={"השם נשמר בהצלחה"} onClickBtn={()=>setbollSucces(!bollSucces)} show={bollSucces}/>
      <FormNewUser onClickSubmit={()=>setbollSucces(!bollSucces)}/>
    </div>
  )
}

export default AdminPage