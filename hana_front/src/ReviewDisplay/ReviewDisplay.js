
const ReviewDisplay = ({ data }) => {
    // data가 없으면 null 반환
    if (!data) return null;

    return (
        <div>
            <h2>{data.name}</h2>
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    );
};

export default ReviewDisplay;