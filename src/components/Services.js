import React, { useState } from 'react';
import { FaCocktail, FaBicycle, FaShuttleVan, FaPizzaSlice } from 'react-icons/fa';
import Title from './Title';

export default function Services() {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: "Free cocktails throughout the day!"
        },
        {
            icon: <FaBicycle />,
            title: "endless cycling",
            info: "32km of bicycle path with free bicycles"
        },
        {
            icon: <FaShuttleVan/>,
            title: "free shuttle",
            info: "Free transfer to and from the airport!"
        },
        {
            icon: <FaPizzaSlice />,
            title: "the best pizza",
            info: "Italian pizza masters!"
        },
    ])

    return (
        <>
        <section className="services" id="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>   
                            <p>{item.info}</p> 
                        </article>
                    )
                })}
            </div>
        </section>
        </>
    )
}
