
const ReviewButton = () => {
    const handleClick = () => {
        console.log('ReviewButton was clicked!');
    };

    return <button onClick={handleClick}>리뷰버튼</button>;
}

export default ReviewButton;