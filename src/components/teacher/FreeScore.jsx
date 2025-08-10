import { useState, useEffect } from 'react';

function FreeScore({ handleDataFromFreeScore, isSelected }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    handleDataFromFreeScore(counter);
  }, [counter, handleDataFromFreeScore]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCounter(isNaN(value) || value < 0 ? 0 : value);
  };

  return (
    <div
      className={`${isSelected ? "bg-tailwind-green" : ""} h-20 flex items-center rounded-lg`}
      // אם רוצים, אפשר להוסיף onClick שמסמן בחירה
      // onClick={() => ...}
    >
      <div className='flex items-center justify-center h-12 space-x-2 px-2'>
        <button
          className='rounded-lg bg-tailwind-cream border border-black w-8 h-8 text-xl'
          onClick={(e) => {
            e.stopPropagation();
            setCounter(prev => Math.max(prev - 1, 0));
          }}
          aria-label="Decrease"
        >
          -
        </button>
        <input
          type="number"
          value={counter}
          onChange={handleInputChange}
          className='text-xl w-16 text-center'
          min={0}
        />
        <button
          className='rounded-lg bg-tailwind-cream border border-black w-8 h-8 text-xl'
          onClick={(e) => {
            e.stopPropagation();
            setCounter(prev => prev + 1);
          }}
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default FreeScore;
