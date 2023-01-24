import { studentList } from "./data"
import { useState } from "react";

const Students = () => {

  const [index, setIndex] = useState(0)
  let student = studentList[index]
  return (
    <>
      <h1>{student.name}</h1>
    </>
  )
}

export default Students