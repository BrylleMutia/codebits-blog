import React from "react";
import { card, card__details, card__rating } from "./Card.module.css";

import { Link } from "react-router-dom";

const Card = ({ postDetails }) => {
    const { _id, title, header, rating, images } = postDetails;

    return (
        <article>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={`/post/${_id}`}>
                <div className={card}>
                    <div className={card__rating}>&#9733; {rating}</div>
                    <img src={`/${images[0]}`} alt="card-img" />
                    <div className={card__details}>
                        <h3>{title}</h3>
                        {/* limit header length to lessen inconsistency in card sizes */}
                        <p>{header.length > 70 ? header.slice(0, 70) + "..." : header}</p>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default Card;
