import React, { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { initialState, API_CONTENTFUL_INFO, API_CONTENTFUL_TYPE_INFO } from './contants';
import { formatData } from './functions';

const RoomContext = createContext();
const RoomConsumer = RoomContext.Consumer;
const Client = createClient(API_CONTENTFUL_INFO);

function RoomProvider({ children }) {
    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        getData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getData = async () => {
        try {
            let response = await Client.getEntries(API_CONTENTFUL_TYPE_INFO);

            // Format data for easy access
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
        
        // All the rooms
        let tempRooms = [...rooms];
        
        // Transform value
        capacity = parseInt(capacity);
        price = parseInt(price);

        // Filter by type 
        type !== "all" && (tempRooms = tempRooms.filter(room => room.type === type));
        
        // Filter by capacity
        capacity !== 1 && (tempRooms = tempRooms.filter(room => room.capacity >= capacity));

        // Filter by price 
        tempRooms = tempRooms.filter(room => room.price <= price)

        // Filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    
        // Filter by breakfast 
        breakfast && (tempRooms = tempRooms.filter(room => room.breakfast === true));

        // Filter by pets
        pets && (tempRooms = tempRooms.filter(room => room.pets === true));

        // Change state with filtered rooms
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