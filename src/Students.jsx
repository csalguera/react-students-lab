import { studentList } from "./data"
import { useState } from "react";
import Score from "./Score";

const Students = () => {

  const [index, setIndex] = useState(0)
  const [bioState, setBioState] = useState(false)
  let student = studentList[index]


  function handleClick(evt) {
    let content = evt.target.textContent
      content === 'Next' ? index === studentList.length - 1 ? setIndex(0) : setIndex(index + 1) :
      index === 0 ? setIndex(studentList.length - 1) : setIndex(index - 1)
  }

  function toggleBio(evt) {
    setBioState(!bioState)
    evt.target.textContent === 'Show Bio' ? evt.target.textContent = 'Hide Bio' : evt.target.textContent = 'Show Bio'
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
      <button onClick={toggleBio}>
        Show Bio
      </button>
      {bioState && <h2>{student.bio}</h2>}
      <Score />
    </>
  )
}

export default Students