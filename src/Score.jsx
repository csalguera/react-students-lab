const Score = (props) => {
  return (
    <>
      <h3>Score {props.num + 1}:</h3>
      <p>{props.score.date}</p>
      <p>{props.score.score}</p>
    </>
  )
}

export default Score