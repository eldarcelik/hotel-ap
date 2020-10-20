import React, { useContext, useEffect } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

// get all unique values using Set() data structure
// https://www.youtube.com/watch?v=nmNvGHMtE2k&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA&index=8&ab_channel=CodingAddict
const getUnique = (items, value) => {
    let tempArray = items.map(item => item[value])
    return [...new Set(tempArray)]
}

export default function RoomsFilter() {
    const { data, setData, handleChange, filterRooms } = useContext(RoomContext);
    const { rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = data;

    useEffect(() => {
        // every time when filters change call this function to change parametars in context and filter rooms
        filterRooms()

    }, [type, capacity, price, minSize, maxSize, breakfast, pets])

    // get unique types
    let types = getUnique(rooms, "type");
    // add default "all"
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => <option key={index} value={item}>{item}</option>);

    // get unique capacity
    let people = getUnique(rooms, "capacity");
    // map to jsx
    people = people.map((item, index) => <option key={index} value={item}>{item}</option>);

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
                {/* end of select type */}

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
                {/* end of guests */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input 
                        name="price" 
                        id="price"
                        type="range"
                        className="form-control"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                    />
                </div>
                {/* end of room price */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input 
                            name="minSize" 
                            id="size" 
                            type="number" 
                            className="size-input" 
                            value={minSize} 
                            onChange={handleChange} 
                        />
                        <input 
                            name="maxSize" 
                            id="size" 
                            type="number" 
                            className="size-input" 
                            value={maxSize} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                {/* end of size */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            name="breakfast"
                            id="breakfast"
                            type="checkbox"
                            value={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            name="pets"
                            id="pets"
                            type="checkbox"
                            value={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
