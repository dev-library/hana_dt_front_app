
const OrderButton = () => {
    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return <button onClick={handleClick}>주문버튼</button>;
}

export default OrderButton;