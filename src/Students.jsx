import { studentList } from "./data"
import { useState } from "react";

const Students = () => {

  const [index, setIndex] = useState(0)
  let student = studentList[index]


  function handleClick(evt) {
    let content = evt.target.textContent
      content === 'Next' ? index === studentList.length - 1 ? setIndex(0) : setIndex(index + 1) :
      index === 0 ? setIndex(studentList.length - 1) : setIndex(index - 1)
  }

  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <button onClick={handleClick}>
        Previous
      </button>
      <h1>{student.name}</h1>
      <h2>{student.bio}</h2>
    </>
  )
}

export default Students