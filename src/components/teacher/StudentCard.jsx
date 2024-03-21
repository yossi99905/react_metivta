import React from 'react'

function StudentCard({ name, studentClass, score ,onCheckboxChange}) {

    return (

        <div className="  rounded-3xl border border-tailwind-green flex justify-end items-center space-x-4 px-4 h-11 w-[710px]">
            <div>
                
                {name}
            </div>
            <form>
                <input type="checkbox" onChange={onCheckboxChange} className="appearance-none w-6 h-6 hover:bg-tailwind-green-bright   rounded-xl border border-gray-300 checked:bg-tailwind-green checked:border-transparent items-center justify-center" />

            </form>
        </div>

    );

};


export default StudentCard