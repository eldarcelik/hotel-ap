import React, { createContext, useEffect, useState } from 'react';
import Client from './Contentful';

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

    // get data
    const getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "hotelAp",
                order: "fields.price"
            })

            // format data for easy access
            let rooms = formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
        
            // get max price and size from all rooms
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
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
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
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
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
            {props.children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };