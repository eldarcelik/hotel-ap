import React from 'react';
import { FaCocktail, FaBicycle, FaShuttleVan, FaPizzaSlice } from 'react-icons/fa';

export const API_CONTENTFUL_INFO = {
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
}

export const API_CONTENTFUL_TYPE_INFO = {
    content_type: "hotelAp",
    order: "fields.price"
}

export const MAP_API_INFO = {
  GOOGLE_MAP_API_KEY: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  LOCATION: {
    lat: 43.85904900714958, 
    lng: 18.416060968509566,
  },
  TEXT: "Hotel AP",
}

export const initialState = {
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
    pets: false
}

export const SERVICES = [
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
]
