
const UserButton = () => {
    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return <button onClick={handleClick}>유저버튼</button>;
}

export default UserButton;