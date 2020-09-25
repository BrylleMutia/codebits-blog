import React from "react";
import { card, card__details, card__rating } from "./Card.module.css";

const Card = ({ postDetails }) => {
    const { title, header, rating, images } = postDetails;

    return (
        <article>
            <div className={card}>
                <div className={card__rating}>&#9733; {rating}</div>
                <img src={`/${images[0]}`} alt="card-img" />
                <div className={card__details}>
                    <h3>{title}</h3>
                    <p>{header}</p>
                </div>
            </div>
        </article>
    );
};

export default Card;
