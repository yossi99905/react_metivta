import NavStore from './NavStore'

const storeManagementPage =() => {
  return (
    <div className='flex h-lvh justify-end'>
            <div className='w-lvw '>

                {/* <HeaderAdmin /> */}
                <div className="mx-9 grid grid-cols-2 gap-4 my-32 h-[500px]">
                    <div className="border p-4">תוכן 1</div>
                    <div className="border p-4">תוכן 2</div>
                    <div className="border p-4">תוכן 3</div>
                    <div className="border p-4">תוכן 4</div>
                </div>


            </div>

            <NavStore />



        </div>
  )
}

export default storeManagementPage