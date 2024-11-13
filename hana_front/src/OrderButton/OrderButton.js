
const OrderButton = () => {
    const handleClick = () => {
        console.log('OrderButton was clicked!');
    };

    return <button onClick={handleClick}>주문버튼</button>;
}

export default OrderButton;