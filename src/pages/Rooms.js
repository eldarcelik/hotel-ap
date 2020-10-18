import React, { useContext, useEffect } from 'react';
import { RoomContext } from '../Context';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Loading from '../components/Loading';
import Room from '../components/Room';

import RoomsContainer from '../components/RoomsContainer';

export default function Rooms() {
    let { data, setData } = useContext(RoomContext);;
    let { loading, sortedRooms } = data;
    
    useEffect(() => {
        // stay on top of the page when it loads
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
        <RoomsContainer />
        </>
    )
}
