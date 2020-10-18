import React, { useContext } from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../Context';
import Loading from './Loading';

export default function RoomsContainer() {
    let { data, setData } = useContext(RoomContext);;
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
