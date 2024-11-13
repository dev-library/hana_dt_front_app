
const UserButton = () => {
    const handleClick = () => {
        console.log('UserButton was clicked!');
    };

    return <button onClick={handleClick}>유저버튼</button>;
}

export default UserButton;