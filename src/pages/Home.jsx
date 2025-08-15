import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className=''>
      <div className='mt-52 lg:ml-60 md:ml-52 sm:ml-32 ml-20 space-y-5  z-50 absolute'>
        <NavLink className='bg-tailwind-green w-56 h-14 flex items-center justify-center rounded-lg text-xl' to={'/student'}><div ><span>תלמיד</span></div></NavLink>
        <NavLink className='bg-tailwind-green w-56 h-14 flex items-center justify-center rounded-lg text-xl' to={'/teacher'}><div ><span>מורה</span></div></NavLink>

      </div>
      <img src="../images/logo.png" className='fixed bottom-24 lg:ml-60 md:ml-52 sm:ml-32 ml-20' width={250} alt="" />
      <div className='h-14 bg-tailwind-green w-lvw bottom-0 fixed'></div>
      <div className='w-lvw h-lvh flex justify-end items-center xl:items-start absolute left-0 top-0 z-20'>
        <img src="../images/bg.png" className=' max-h-lvh z-0' alt="" />
      </div>

    </div>
  )
}

export default Home