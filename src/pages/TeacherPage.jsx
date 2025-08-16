import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../auth/signOut'
import ListUsers from '../components/teacher/ListUsers'
import HeaderForPage from '../components/HeaderForPage'
import { useAuth } from "../atoms/authAtom";
import ListCategory from '../components/teacher/ListCategory'
import SuccessMessage from '../components/SuccessMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import UserInformation from '../components/UserInformation'
import { useTeacherStudents } from '../hook/useUsers'
import { useCategories } from '../hook/useCategories'
import { useGivePoints } from '../hook/usePoints'
import { useQueryClient } from '@tanstack/react-query'

function TeacherPage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const givePointsMutation = useGivePoints();
  const queryClient = useQueryClient();

  const [bollSuccess, setbollSuccess] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  const [pointToGive, setPointToGive] = useState();
  const [categoryChoose, setCategoryChoose] = useState();


  const { data: users = [] } = useTeacherStudents(auth.classRoom);
  const { data: categories = [] } = useCategories();






  const [showUserInformation, setShowUserInformation] = useState(false)

  const handelSubmit = () => {
    setCategoryShow(false)
    givePointsMutation.mutate(
      { pointToGive, categoryChoose: categoryChoose.score },
      {
        onSuccess: () => {
          setbollSuccess(true);
          queryClient.invalidateQueries(['teacher-students', auth.classRoom]);
        },
        onError: (error) => {
          console.error('Failed to give points:', error);
        },
      }
    );
  }

  // const transactionDocumentation = async () => {
  //   try {
  //     const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];

  //     if (pointToGive.length === 0) {
  //       console.log("No points to give.");
  //       return;
  //     }
  //     if (categoryChoose === 0) {
  //       console.log("No category chosen.");
  //       return;
  //     }
  //     if (!accessToken) {
  //       console.log("No accessToken found.");
  //       return;
  //     }

  //     for (const email of pointToGive) {

  //       const user = users.find(user => user.email === email);
  //       const balanceBeforeTransaction = user ? user.score : 0;
  //       const balanceAfterTransaction = balanceBeforeTransaction + categoryChoose;

  //       try {
  //         const resp = await axios.post(`/transactions/${email}`, {

  //           transactionType: 'credit',
  //           category: categoryNameChoosen,
  //           pointsAmount: categoryChoose,
  //           balanceBeforeTransaction, // Replace with the actual balance before the transaction
  //           balanceAfterTransaction, // Replace with the actual balance after the transaction
  //           performedByName: auth.firstName + ' ' + auth.lastName,
  //           performedByEmail: auth.email

  //         }, {
  //           headers: {
  //             'x-api-key': accessToken
  //           }
  //         });

  //         console.log(`Transaction Successsful for ${email}:`, resp.data);
  //       } catch (error) {
  //         console.error(`Failed to process transaction for ${email}:`, error.response ? error.response.data : error.message);
  //       }
  //     }
  //   } catch (err) {
  //     console.error('Error in transactionDocumentation:', err.message);
  //   }
  // };


  return (
    <div className='h-lvh'>

      <SuccessMessage name={"הנקודות נשמרו בהצלחה"} onClickBtn={() => setbollSuccess(false)} show={bollSuccess} />

      <HeaderForPage >
        <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => setShowUserInformation(perv => !perv)}>
          <FontAwesomeIcon icon={faUser} className='text-tailwind-green text-xl' />
        </div>
        <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300'>
          <FontAwesomeIcon icon={faHome} className='text-tailwind-green text-xl' onClick={() => navigate('/')} />
        </div>
        <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => { signOut(navigate); setAuth({}) }}>
          <FontAwesomeIcon icon={faRightFromBracket} className='text-tailwind-green text-xl' />
        </div>
        <p className='text-white text-3xl'>{auth.firstName + " " + auth.lastName}</p>
      </HeaderForPage>
      <UserInformation left={24} name={auth.firstName + " " + auth.lastName} classRoom={auth.classRoom} secretCode={auth.secretCode} active={showUserInformation} />
      <input type="text" placeholder='חיפוש תלמיד' className='border border-tailwind-green rounded-3xl text-right px-3 h-8 ml-28 mb-8 mt-9 ' />

      <div className=' mx-auto flex sm:items-start items-center flex-col-reverse sm:flex sm:flex-row justify-center    space-x-8  '>

        <div className=' flex flex-row justify-center sm:m-0 m-7  '>
          <ListUsers users={users} setPointToGive={setPointToGive} />
        </div>
        <div className='w-40 flex flex-col justify-start items-center'>
          <button onClick={() => setCategoryShow(!categoryShow)} className='rounded-3xl bg-tailwind-green text-white text-3xl w-[200px] sm:w-36 sm:h-28 '>הוספת ניקוד</button>
          <div className={`${!categoryShow && 'hidden'} h-full w-36 flex flex-col items-center`}>
            <ListCategory categories={categories} setCategoryChoose={setCategoryChoose} />
          </div>



        </div>


      </div>
      <div className='lg:w-[710px] md:w-[500px] sm:w-[410px] w-full bottom-4 fixed sm:bottom-28 sm:left-24'>
        <button onClick={handelSubmit} disabled={categoryChoose == 0} className={`${(categoryChoose == 0) && "bg-tailwind-green-bright"}  rounded-3xl bg-tailwind-green text-white text-3xl sm:w-36 sm:h-28 w-full h-8 `}>שליחה</button>
      </div>
    </div>
  )
}

export default TeacherPage