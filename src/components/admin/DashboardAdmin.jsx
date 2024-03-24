import React from 'react'
import NavAdmin from './NavAdmin'

function DashboardAdmin() {
    return (
        <div className='grid grid-cols-4 h-lvh'>
            <div className="col-span-3 grid grid-cols-2 gap-4 my-32">
                <div className="border p-4">תוכן 1</div>
                <div className="border p-4">תוכן 2</div>
                <div className="border p-4">תוכן 3</div>
                <div className="border p-4">תוכן 4</div>
            </div>

            <div className='col-span-1'>

                <NavAdmin />
            </div>

        </div>
    )
}

export default DashboardAdmin