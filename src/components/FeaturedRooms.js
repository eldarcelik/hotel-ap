import React, { useContext } from 'react';
import { RoomContext } from '../Context';

export default function FeaturedRooms() {
    const [data, setData] = useContext(RoomContext);
    const { featuredRooms } = data;
    console.log(featuredRooms);
    return (
        <div>
            FeaturedRooms
        </div>
    )
}
