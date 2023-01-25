const Score = ({ num, score }) => {
  return (
    <>
      <h3>Score {num + 1}:</h3>
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </>
  )
}

export default Score