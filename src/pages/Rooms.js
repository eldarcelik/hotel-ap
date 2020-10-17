import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Loading from '../components/Loading';
import Room from '../components/Room';

export default function Rooms() {
    let { data, setData } = useContext(RoomContext);;
    let { loading, sortedRooms } = data;
    
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
        <section className="roomslist">
            <div className="roomslist-center">
                {loading 
                    ? <Loading />
                    : sortedRooms.map(room => {
                        return <Room key={room.id} room={room} />
                    }) 
                }
            </div>
        </section>
        </>
    )
}
