import { useEffect, useState } from "react"
import Category from "./Category"
import axios from "../../api/urls"

function ListCayegory({onData}) {
  const [categories, setcategories] = useState([])
  const [categorySelection, setCategorySelection] = useState(0);
  const [categoryMarker, setcategoryMarker] = useState();

  useEffect(() => {
        
    const data =  categorySelection
    onData(data);
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

  return (
    <div className="flex flex-col space-y-3 mt-5  rounded-3xl ">
      {
        categories.length ?
          categories.map((category, index) => (
            <Category key={index} name={category.name} selected={categoryMarker == index} selectBtn={()=>{setCategorySelection(category.score);setcategoryMarker(index)}} />
          ))
          : <li>אין קטגוריות</li>
      }

      
    </div>
  )
}

export default ListCayegory