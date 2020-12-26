import React, { useContext } from 'react';
import { RoomContext } from '../../Context';
import Title from '../Title/Title';
import Loading from '../Loading/Loading';
import Room from '../Room/Room';
import './FeaturedRooms.css';

export default function FeaturedRooms() {
    let { data } = useContext(RoomContext);
    let { loading, featuredRooms } = data;
    
    featuredRooms = featuredRooms.map(room => {
        return <Room key={room.id} room={room} />}) 

    if (loading) {
        return <Loading />;
    }
    
    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {featuredRooms}
            </div>
        </section>
    )
}
