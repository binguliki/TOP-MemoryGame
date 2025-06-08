import { Card } from "./Card";
import { useState } from "react";

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export default function Game({ data, resetGame, increaseScore }) {
    const [clicked, setClicked] = useState([]);
    const handleClick = (e) => {
        const id = e.currentTarget.dataset.id;
        console.log(clicked, id);
        if (clicked.includes(id)) {
            resetGame();
            setClicked([]);
        } else {
            setClicked((prev) => [...prev, id]);
            increaseScore();
        }
    }
    const shuffledData = shuffleArray(data);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {shuffledData.map(character => (
                <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    url={character.sprite}
                    handleClick={handleClick}
                />
            ))}
        </div>

    )
}