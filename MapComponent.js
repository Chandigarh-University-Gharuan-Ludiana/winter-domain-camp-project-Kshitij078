import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};
const center = { lat: 28.7041, lng: 77.1025 }; // Default center location

const MapComponent = ({ drones }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBjAczBRibq8DTWObnCzqD8HnJ1JLJkO14",
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
            {drones.map((drone, index) => (
                <Marker key={index} position={{ lat: drone.location.lat, lng: drone.location.lng }} />
            ))}
        </GoogleMap>
    );
};

export default MapComponent;
