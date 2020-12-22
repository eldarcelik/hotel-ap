import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css';

export default function Room({ room }) {
    const { name, slug, images, price } = room;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="signle room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/hotel-ap/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
