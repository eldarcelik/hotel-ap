import React, { useContext } from 'react';
import { RoomContext } from '../../Context';
import { SiHotelsDotCom } from 'react-icons/si';
import GoogleMapReact from 'google-map-react';
import './Footer.css';

const getUnique = (items, value) => {
    let tempArray = items.map(item => item[value])
    return [...new Set(tempArray)]
}

const LogoComponent = () => <div className="logo-component-map"><SiHotelsDotCom /></div>;

export default function Footer() {
    const { data } = useContext(RoomContext);
    const { rooms } = data;

    // get unique types
    let types = getUnique(rooms, "type");
    // add default "all"
    types = [...types];
    // map to jsx
    types = types.map(item => item.charAt(0).toUpperCase() + item.slice(1)).map((item, index) => <p key={index}>{item} rooms</p>);

    return (
        <>
        <section className="footer" id="contact">
            <div className="footer-center">
                <div className="footer-info">
                    <div>
                        <div className="footer-headers">
                            <SiHotelsDotCom />OTEL<span> AP</span>
                        </div>
                        <div>
                            <p>City: Sarajevo</p>
                            <p>Street: Trg djece Sarajeva</p>
                            <p>Phone: +387 33 123 456</p>
                            <p>Fax: +387 33 321 654</p>
                        </div>
                    </div>
                    <div className="room-types">
                        <span className="footer-headers">Rooms:</span>
                        {types}
                    </div>
                    <div className="strategy">
                        <span className="footer-headers">Our strategy is based on:</span>
                        <p>1. Partnership with guests</p>
                        <p>2. Employees</p>
                        <p>3. Relations with suppliers</p>
                        <p>4. Satisfaction of interesting parties</p>
                    </div>
                </div>
                <div className="location">
                    <div className="location-map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyCfqMSyB-mYKfPhKXGPqy5IY0-daeU9gYg' }}
                            defaultCenter={{lat: 43.85904900714958, lng: 18.416060968509566}}
                            defaultZoom={11}
                        >
                            <LogoComponent
                                lat={43.85904900714958}
                                lng={18.416060968509566}
                                text="Hotel AP"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
