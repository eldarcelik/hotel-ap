import React, { createContext, useEffect, useState } from 'react';
import items from './data';

const RoomContext = createContext();

function RoomProvider(props) {
    const [data, setData] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    });
    //getData

    useEffect(() => {
        //getData

        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(room => room.price));
        let maxSize = Math.max(...rooms.map(room => room.size));
        setData({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,
        });
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

    const handleChange = (event) => {
        const type = event.target.type;
        const name = event.target.name;
        const value = event.target.value;
    }

    const filterRooms = () => {
        console.log("Test")
    }

    return (
        <RoomContext.Provider value={{data, setData, getRoom, handleChange}}>
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };