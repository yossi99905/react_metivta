import { useCallback, useMemo, useState } from "react"
import Category from "./Category"
import FreeScore from "./FreeScore";

function ListCategory({ categories, setCategoryChoose }) {
  const [categoryMarker, setCategoryMarker] = useState();

  const handleDataFromFreeScore = useCallback((score) => {
    setCategoryChoose({ name: "freeScore", score: score });
    setCategoryMarker(-1);
  }, [setCategoryChoose]);

  const categoryList = useMemo(() => {
    return categories.length ?
      categories.map((category, index) => (
        <Category
          key={index}
          name={category.name}
          score={category.score}
          selected={categoryMarker == index}
          selectBtn={() => {
            setCategoryChoose({ name: category.name, score: category.score });
            setCategoryMarker(index);
          }} />
      ))
      :
      <div className="h-20 flex items-center rounded-lg">אין קטגוריות</div>

  }, [categories, categoryMarker, setCategoryChoose])

  return (
    <div className="w-[200px] sm:w-full flex flex-col space-y-3 mt-5  rounded-3xl justify-center items-center">
      {categoryList}
      <FreeScore
        handleDataFromFreeScore={handleDataFromFreeScore}
        isSelected={categoryMarker === -1}
      />
    </div>
  )
}

export default ListCategory