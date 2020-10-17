import React from 'react';
import Room from './Room';


export default function RoomsList({rooms}) {
    if (!rooms.length) {
        return <div className="empty-search">unfortunately no rooms matched your search parametars</div>
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(room => {
                    return <Room key={room.id} room={room} />}) 
                }
            </div>
        </section>
    )
}
