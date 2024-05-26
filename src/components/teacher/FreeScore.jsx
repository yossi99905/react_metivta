import React, { useState, useEffect } from 'react';

function FreeScore({ onData }) {
    const [counter, setCounter] = useState(0);
    const [previousCounter, setPreviousCounter] = useState(0); // counter value from the previous render

    useEffect(() => {
        if (counter !== previousCounter) { // only call the function if the counter value has changed
            onData(counter);
            setPreviousCounter(counter); // update the previous counter value
        }
    }, [counter, previousCounter, onData]);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setCounter(value);
        } else {
            setCounter(0); // reset to 0 if input is not a number
        }
    };

    return (
        <div className='flex items-center justify-center h-12 space-x-2 px-2'>
            <button className='rounded-lg bg-tailwind-cream border border-black size-8 text-xl' onClick={() => setCounter(prev => prev === 0 ? prev : prev - 1)}>-</button>
            <input
                type="number"
                value={counter}
                onChange={handleInputChange}
                className='text-xl w-16 text-center'
                
                min={0}
            />
            <button className='rounded-lg bg-tailwind-cream border-spacing-1 border border-black size-8 text-xl' onClick={() => setCounter(prev => prev + 1)}>+</button>
        </div>
    );
}

export default FreeScore;

