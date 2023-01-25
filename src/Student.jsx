import { studentList } from "./data"
import { useState } from "react";
import Score from "./Score";

const Students = () => {

  const [index, setIndex] = useState(0)
  const [bioState, setBioState] = useState(false)
  const [scoreState, setScoreState] = useState(false)
  let student = studentList[index]


  function handleClick(evt) {
    let content = evt.target.textContent
    content === 'Next' ? index === studentList.length - 1 ? setIndex(0) : setIndex(index + 1) : index === 0 ? setIndex(studentList.length - 1) : setIndex(index - 1)
  }

  function toggleBio(evt) {
    setBioState(!bioState)
    evt.target.textContent === 'Show Bio' ? evt.target.textContent = 'Hide Bio' : evt.target.textContent = 'Show Bio'
  }

  function toggleScores(evt) {
    setScoreState(!scoreState)
    evt.target.textContent === 'Show Scores' ? evt.target.textContent = 'Hide Scores' : evt.target.textContent = 'Show Scores'
  }

  return (
    <>
      <h1>{student.name}</h1>
      <div className="btns-container">
        <button onClick={handleClick}>
          Previous
        </button>
        <div className="content-btns-container">
          <button onClick={toggleBio}>
            Show Bio
          </button>
          <button onClick={toggleScores}>
            Show Scores
          </button>
        </div>
        <button onClick={handleClick}>
          Next
        </button>
      </div>
      <div className="details-container">
        {bioState && <h2 className="bio">{student.bio}</h2>}
        {scoreState &&
          <div className="scores">
            {student.scores.map((score, idx) =>
              <Score num={idx} key={idx} score={score}/>
            )}
          </div>
        }
      </div>
    </>
  )
}

export default Students