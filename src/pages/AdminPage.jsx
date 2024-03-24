import React, { useState } from 'react'
import FormNewUser from '../components/admin/FormNewUser'
import SuccesMessage from '../components/SuccesMessage'
import DashboardAdmin from '../components/admin/DashboardAdmin'

function AdminPage() {
  
  return (
    <div>

      {/* <div className='pt-24 h-lvh'>
        <SuccesMessage name={"השם נשמר בהצלחה"} onClickBtn={() => setbollSucces(!bollSucces)} show={bollSucces} />
        <FormNewUser onClickSubmit={() => setbollSucces(!bollSucces)} />
      </div> */}
      <DashboardAdmin/>
    </div>
  )
}

export default AdminPage