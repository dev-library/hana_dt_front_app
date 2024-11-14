import React, { useState } from "react";
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";

const ReviewButton = () => {
    const [pokemonData, setPokemonData] = useState(null);

    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pidgey")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPokemonData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <button onClick={handleClick}>리뷰버튼</button>
            {/* ReviewDisplay 컴포넌트에 pokemonData 전달 */}
            <ReviewDisplay data={pokemonData} />
        </div>
    );
};

export default ReviewButton;