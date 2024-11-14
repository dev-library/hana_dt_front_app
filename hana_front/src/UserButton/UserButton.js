import React, { useState } from "react";
import UserDisplay from "../UserDisplay/UserDisplay";

const UserButton = () => {
    const [pokemonData, setPokemonData] = useState(null);

    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
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
            <button onClick={handleClick}>유저버튼</button>
            {/* UserDisplay 컴포넌트에 pokemonData 전달 */}
            <UserDisplay data={pokemonData} />
        </div>
    );
};

export default UserButton;