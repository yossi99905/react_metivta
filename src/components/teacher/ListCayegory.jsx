import { useEffect, useState } from "react"
import Category from "./Category"
import axios from "../../api/urls"

function ListCayegory() {
  const [categories, setcategories] = useState([])
  const [categorySelection, setCategorySelection] = useState();


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
            <Category key={index} name={category.name} selected={categorySelection == index} selectBtn={()=>{setCategorySelection(index)}} />
          ))
          : <li>אין קטגוריות</li>
      }

      
    </div>
  )
}

export default ListCayegory