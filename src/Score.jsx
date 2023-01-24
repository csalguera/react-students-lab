const Score = ({ num, score }) => {
  return (
    <>
      <h3>Score {num + 1}:</h3>
      <p>{score.date}</p>
      <p>{score.score}</p>
    </>
  )
}

export default Score