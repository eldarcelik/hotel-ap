import React, { useContext } from 'react';
import { RoomContext } from '../../Context'
import { SiHotelsDotCom } from 'react-icons/si';
import GoogleMapReact from 'google-map-react';
import { getUnique } from '../../functions';
import { MAP_API_INFO } from '../../contants';
import './Footer.css';

const LogoComponent = () => <div className="logo-component-map"><SiHotelsDotCom /></div>;

export default function Footer() {
    const { data } = useContext(RoomContext);
    const { rooms } = data;

    // get unique types
    let types = getUnique(rooms, "type");
    types = [...types];
    // map to jsx
    types = types
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .map((item, index) => <p key={index}>{item} rooms</p>);

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
                            bootstrapURLKeys={{ key: MAP_API_INFO.GOOGLE_MAP_API_KEY }}
                            defaultCenter={ MAP_API_INFO.LOCATION }
                            defaultZoom={11}
                        >
                            <LogoComponent
                                lat={MAP_API_INFO.LOCATION.lat}
                                lng={MAP_API_INFO.LOCATION.lng}
                                text={MAP_API_INFO.TEXT}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
