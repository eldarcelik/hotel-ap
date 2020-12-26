import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../../components/Services/Services';
import ArrowSlideDown from '../../components/ArrowSlideDown/ArrowSlideDown';
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms';

export default function Home() {
    useEffect(() => {
        // stay on top of the page when it loads
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
        <Hero>
            <div className="centerFlex">
                <Banner title="treat yourself to a dream vacation" subtitle="Deluxe Rooms Starting at $299">
                    <Link to="/hotel-ap/rooms" className="btn-primary">Our rooms</Link>
                </Banner>
                <ArrowSlideDown />
            </div>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
}
