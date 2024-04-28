import React from 'react'

function StudentCard({ name, studentClass, score, onCheckboxChange, isChecked}) {

    return (

        <div className="  rounded-3xl border border-tailwind-green flex justify-end items-center space-x-4 px-4 h-11 w-[710px]">
            <div className='flex justify-between w-full
'>

                <p className="text-right">{Math.floor(score)}</p>
              <p className="text-right">{name}</p>
            </div>
            <form>
                <input type="checkbox" onChange={onCheckboxChange} checked={isChecked}  className="appearance-none w-6 h-6 hover:bg-tailwind-green-bright   rounded-xl border border-gray-300 checked:bg-tailwind-green checked:border-transparent items-center justify-center" />

            </form>
        </div>

    );

};


export default StudentCard