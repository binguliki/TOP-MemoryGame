export const ScoreBoard = ({ score, bestScore }) => {
    return (
        <div className="text-center text-5xl font-extrabold text-white">
            <h1
                className="text-5xl pt-2 font-extrabold"
            >
                Welcome to the Memory Game
            </h1>
            <h2 className="mt-2 text-2xl font-semibold">
                Score: {score} Best Score: {bestScore}
            </h2>
        </div>
    )
}