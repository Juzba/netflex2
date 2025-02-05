import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const { image, title, age, tags, description } = props.element;
    let [open, setOpen] = useState(false);

    return (
        <div className="card">
            <div className="imgConatiner">
                <img
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    src={image}
                    alt=""></img>
            </div>

            <div className={`close ${open && 'open'}`}>
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
