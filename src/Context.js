import React, { createContext, useEffect, useState } from 'react';
import items from './data';

const RoomContext = createContext();

function RoomProvider(props) {
    const [data, setData] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
    });
    //getData

    useEffect(() => {
        //getData

        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        setData({rooms, featuredRooms, sortedRooms: rooms, loading: false});
    }, []); 

    // get specific room
    const getRoom = (slug) => {
        let tempRooms = [...data.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    }

    // format and save all information about one room in one object
    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};

            return room;
        });
        return tempItems;
    }

    return (
        <RoomContext.Provider value={{data, setData, getRoom}}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };