import React, { useContext, useEffect } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

// get all unique values using Set() data structure
// https://www.youtube.com/watch?v=nmNvGHMtE2k&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA&index=8&ab_channel=CodingAddict
const getUnique = (items, value) => {
    let tempArray = items.map(item => item[value])
    return [...new Set(tempArray)]
}

export default function RoomsFilter(props) {
    const { data, setData, handleChange, filterRooms } = useContext(RoomContext);
    const { rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = data;

    useEffect(() => {
        // every time when filters change call this function to change parametars in state and filter rooms
        filterRooms()

    }, [type, capacity])
    
    useEffect(() => {
        // set filters to default every time it mounts
        return () => {
            setData(prevData => ({
                ...prevData,
                type: "all",
                capacity: 1,
                price: 0,
                minPrice: 0,
                maxPrice: 0,
                minSize: 0,
                maxSize: 0,
                breakfast: false,
                pets: false,
            }))
        } 
    }, [])

    // get unique types
    let types = getUnique(rooms, "type");
    // add default "all"
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    // get unique capacity
    let people = getUnique(rooms, "capacity");
    // map to jsx
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type"
                        className="form-control"
                        value={type}  
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select 
                        name="capacity" 
                        id="capacity"
                        className="form-control"
                        value={capacity}  
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end guests */}
            </form>
        </section>
    )
}
