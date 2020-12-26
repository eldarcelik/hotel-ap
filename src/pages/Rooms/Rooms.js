import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import RoomsContainer from '../../components/RoomContainer/RoomsContainer';

export default function Rooms() {    
    useEffect(() => {
        // stay on top of the page when it loads
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/hotel-ap" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
        <RoomsContainer />
        </>
    )
}
