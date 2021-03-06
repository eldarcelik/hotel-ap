import React, { useContext } from 'react';
import { RoomContext } from '../../Context';
import Room from '../Room/Room';
import './RoomsList.css';

export default function RoomsList() {
    let { data } = useContext(RoomContext);;
    let { sortedRooms } = data;

    sortedRooms = sortedRooms.map(room => {
        return <Room key={room.id} room={room} />}) 

    if (!sortedRooms.length) {
        return <div className="empty-search">unfortunately no rooms matched your search parametars</div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {sortedRooms}
            </div>
        </section>
    )
}
