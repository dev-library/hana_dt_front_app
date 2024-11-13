
const ReviewButton = () => {
    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pidgey")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return <button onClick={handleClick}>리뷰버튼</button>;
}

export default ReviewButton;