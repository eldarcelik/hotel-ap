import React, { useContext } from 'react';
import Room from './Room';
import { RoomContext } from '../Context';

export default function RoomsList() {
    let { data, setData } = useContext(RoomContext);;
    let { sortedRooms } = data;

    if (!sortedRooms.length) {
        return <div className="empty-search">unfortunately no rooms matched your search parametars</div>
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {sortedRooms.map(room => {
                    return <Room key={room.id} room={room} />}) 
                }
            </div>
        </section>
    )
}
