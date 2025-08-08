import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const StudentScoreLead = ({ score,name }) => {
    const [size, setSize] = useState(0);

    useEffect(() => {
        let currentSize = 0;
        const interval = setInterval(() => {
            if (currentSize < score) {
                currentSize++;
                setSize(currentSize);

            } else {
                clearInterval(interval);
            }
        }, 5); // Adjust the interval timing as needed
        return () => clearInterval(interval);
    }, [score]);

    return (
        <div className='flex space-x-2 border'>
            <h2 className='w-52 text-end'>{name}</h2>
            <div className='flex justify-center items-center border rounded-full size-6'>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={"bg-tailwind-green ease-linear transition-width duration-700 h-6 "} style={{ width: `${size}px` }}></div>

        </div>
    );
}

export default StudentScoreLead;