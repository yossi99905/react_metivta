import { useState } from 'react';

function useNum({ autoplay, score }) {
    const [num, setNum] = useState(0);
    const [catchInterval, setCatchInterval] = useState(null);

    const start = () => {

        if (autoplay) {
            setCatchInterval(
                setInterval(() => {
                    setNum((prev) => {
                        if (prev >= score) {
                            clearInterval(catchInterval);
                            return prev;
                        } else {
                            return prev + 1;
                        }
                    }
                    );

                }, 18)
            );
        }
    };


    return { num, start };
}

export default useNum;