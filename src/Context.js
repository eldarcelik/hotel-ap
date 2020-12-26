import React, { createContext, useEffect, useState } from 'react';
import { Client, initialState, API_INFO } from './contants';
import formatData from './formatData';

const RoomContext = createContext();
const RoomConsumer = RoomContext.Consumer;

function RoomProvider({ children }) {
    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        getData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getData = async () => {
        try {
            let response = await Client.getEntries(API_INFO);

            // format data for easy access
            let rooms = formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
        
            let maxPrice = Math.max(...rooms.map(room => room.price));
            let maxSize = Math.max(...rooms.map(room => room.size));
        
            setData(prevData => ({ 
                ...prevData,
                rooms, 
                featuredRooms, 
                sortedRooms: rooms, 
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize,
            }));

        } catch (error) {
            // TODO: Handle error
        }
    }
    
    const handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    
    const getRoom = (slug) => {
        let tempRooms = [...data.rooms];
        const room = tempRooms.find((room) => room.slug === slug);

        return room;
    }

    const filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = data;
        
        // all the rooms
        let tempRooms = [...rooms];
        
        // transform value
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by type 
        type !== "all" && (tempRooms = tempRooms.filter(room => room.type === type));
        
        // filter by capacity
        capacity !== 1 && (tempRooms = tempRooms.filter(room => room.capacity >= capacity));

        // filter by price 
        tempRooms = tempRooms.filter(room => room.price <= price)

        // filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    
        // filter by breakfast 
        breakfast && (tempRooms = tempRooms.filter(room => room.breakfast === true));

        // filter by pets
        pets && (tempRooms = tempRooms.filter(room => room.pets === true));

        // change state with filtered rooms
        setData(prevData => ({
            ...prevData,
            sortedRooms: tempRooms
        }))
    }

    return (
        <RoomContext.Provider value={{data, setData, getRoom, handleChange, filterRooms}}>
            {children}
        </RoomContext.Provider>
    )
}

export { RoomContext, RoomProvider, RoomConsumer };