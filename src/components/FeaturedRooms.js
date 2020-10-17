import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

export default function FeaturedRooms() {
    let { data, setData } = useContext(RoomContext);;
    let { loading, featuredRooms } = data;
    
    if (loading) {
        return <Loading />;
    }
    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {featuredRooms.map(room => {
                    return <Room key={room.id} room={room} />}) 
                }
            </div>
        </section>
    )
}
