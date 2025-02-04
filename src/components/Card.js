import "./Card.css";

const Card = (props) => {
    const {image, title, age, tags, description} = props.element
	return (
		<div className='card'>
            <img src={image} alt=""></img>
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>

		</div>
	);
};

export default Card;
