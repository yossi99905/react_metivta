import { useEffect, useState } from "react"
import Category from "./Category"
import axios from "../../api/urls"
import FreeScore from "./FreeScore";

function ListCayegory({ onData, categoryName }) {
  const [categories, setcategories] = useState([])
  const [categorySelection, setCategorySelection] = useState(0);
  const [categoryNameChoosen, setCategoryNameChoosen] = useState("");
  const [categoryMarker, setcategoryMarker] = useState();
  const [freeScore, setFreeScore] = useState(0);
  const [perviousFreeScore, setPerviousFreeScore] = useState(0);



  useEffect(() => {

    const data = categorySelection
    onData(data);
    categoryName(categoryNameChoosen);
  }, [categorySelection]);


  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        const resp = await axios.get('/categories', {
          headers: {
            'x-api-key': token
          },
          signal: controller.signal
        });
        console.log(resp.data);
        if (isMounted) {

          setcategories(resp.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
    return () => {
      isMounted = false
      controller.abort()
    }
  }
    , [])

  const handleDataFromFreeScore = (score) => {
    setPerviousFreeScore(score);
    setCategorySelection(score);

  };




  return (
    <div className="w-[200px] sm:w-full flex flex-col space-y-3 mt-5  rounded-3xl justify-center items-center">
      {
        categories.length ?
          categories.map((category, index) => (
            <Category key={index} name={category.name} score={category.score} selected={categoryMarker == index} selectBtn={() => { setCategorySelection(category.score); setcategoryMarker(index); setCategoryNameChoosen(category.name) }} />
          ))
          : <li>אין קטגוריות</li>
      }
      <div className={` ${categoryMarker == -1 && "bg-tailwind-green"} h-20 flex items-center rounded-lg`} onClick={() => { setcategoryMarker(-1); setCategorySelection(perviousFreeScore); setCategoryNameChoosen("ניקוד חופשי") }}>
        <FreeScore onData={handleDataFromFreeScore} />
      </div>


    </div>
  )
}

export default ListCayegory