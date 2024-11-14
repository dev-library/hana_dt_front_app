import React, { useState } from "react";
import OrderDisplay from "../OrderDisplay/OrderDisplay";

const OrderButton = () => {
    const [pokemonData, setPokemonData] = useState(null);

    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
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
            <button onClick={handleClick}>주문버튼</button>
            {/* OrderDisplay 컴포넌트에 pokemonData 전달 */}
            <OrderDisplay data={pokemonData} />
        </div>
    );
};

export default OrderButton;