import React, { useContext, useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';
import Title from '../components/Title';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';    

export default function SingleRoom(props) {
    //the props is being passed by react router
    const [slug] = useState(props.match.params.slug);
    const { getRoom } = useContext(RoomContext);
    const room = getRoom(slug);
    
    useEffect(() => {
        // stay on top of the page when it loads
        window.scrollTo(0, 0);
    }, [])

    if (!room) {
        return ( 
            <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        )
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    
    return (
        <>
        <StyledHero img={images[0]}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </Banner>
        </StyledHero>

        <section className="single-room" style={{width: "80%", margin: "0 auto"}}>

            {/* Carousel */}
            <div className="single-room-images">
                <Title title="Images" />
                <Carousel >
                    {images.map((image, index) => <img key={index} src={image} alt="Room Images" />)}
                </Carousel>
            </div>

            {/* Details */}
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>

                {/* Info */}
                <article className="info">
                    <h3>info</h3>
                    <h6>price: ${price}</h6>
                    <h6>size: ${size} SQFT</h6>
                    <h6>max capacity: 
                        {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
                    </h6>
                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>
                </article>
            </div>

            {/* Extras */}
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </section>
        </section>
        </>
    )
}
