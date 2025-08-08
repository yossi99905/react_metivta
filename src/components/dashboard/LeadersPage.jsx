import React, { useEffect, useState } from 'react'
import StudentScoreLead from './StudentScoreLead'
import axios from '../../api/urls'


function LeadersPage() {
    useEffect(() => {
        const getLeaders = async () => {
            try {
                
                const resp = await axios.get("/studentLeaders/top-students", {
                    // headers: {
                    //     'x-api-key': token
                    // }
                });
                console.log(resp.data)
                setLeaders(resp.data)
            }
            catch (err) {
                console.log(err);
            }
        }
        getLeaders();

        const interval = setInterval(() => {
            getLeaders();
        }, 600000); // 10 minutes in milliseconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    const [leaders, setLeaders] = useState([])
    
  return (
    <div className=' w-[1000px] m-auto'>
        {
            leaders.map((leader, index) => {
                return <StudentScoreLead key={index} score={leader.totalPoints} name={leader.studentName} />
            })
        }
       
    </div>
  )
}

export default LeadersPage