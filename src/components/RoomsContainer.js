import React, { useContext } from 'react';
import RoomsFilter from './RoomsFilter/RoomsFilter';
import RoomsList from './RoomsList/RoomsList';
import { RoomContext } from '../Context';
import Loading from './Loading';

export default function RoomsContainer() {
    let { data } = useContext(RoomContext);;
    let { loading } = data;
    
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter />
            <RoomsList />
        </>
    )
}
