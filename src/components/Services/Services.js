import React from 'react';
import { SERVICES } from '../../contants';
import Title from '../Title/Title';
import './Services.css';

export default function Services() {
    return (
        <section className="services" id="services">
            <Title title="services" />
            <div className="services-center">
                {SERVICES.map((item, index) => (
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>   
                        <p>{item.info}</p> 
                    </article>
                ))}
            </div>
        </section>
    )
}
