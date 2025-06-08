import { useState, useEffect } from "react";
import Game from "./Game";
import { ScoreBoard } from "./ScoreBoard";

async function getRandomPokemonImages(count = 12) {
    const maxPokemon = 1025;
    const selectedIds = new Set();
    const results = [];

    while (results.length < count) {
        const randomId = Math.floor(Math.random() * maxPokemon) + 1;

        if (selectedIds.has(randomId)) continue;
        selectedIds.add(randomId);

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const data = await res.json();

            const sprite = data.sprites.other['official-artwork'].front_default;
            if (sprite) {
                results.push({
                    id: data.id,
                    name: data.name,
                    sprite: sprite,
                });
            }
        } catch (error) {
            console.error(`Failed to fetch Pokémon with ID ${randomId}`, error);
        }
    }

    return results;
}
export default function Home() {
    const [data, setData] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await getRandomPokemonImages();
            setData(pokemonData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        setBestScore(Math.max(score, bestScore));
    }, [score])

    const resetGame = () => {
        setScore(0);
    }
    const increaseScore = () => {
        setScore(prev => prev + 1);
    }
    return (
        <div className="h-screen bg-[url(src/assets/background.png)] bg-repeat bg-cover">
            <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
            <Game data={data} resetGame={resetGame} increaseScore={increaseScore}></Game>
        </div>
    )
}