import React, { useEffect } from 'react';

const GrayscaleMap = () => {
    useEffect(() => {
        // Load the Google Maps script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwuhFImwnN97PrTWKOEIb0-izvi-PIdXQ&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = () => {
            const companyLocation = { lat: 40.508174896240234, lng: -80.03579711914062 }; // Your coordinates
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: companyLocation,
                styles: [
                    {
                        featureType: "all",
                        elementType: "all",
                        stylers: [{ saturation: -100 }] // Grayscale style
                    }
                ],
                mapTypeControl: false, // Disables the map type control, removing the satellite view option
                streetViewControl: false, // Optionally, disable Street View as well
                fullscreenControl: false, // Optionally, disable fullscreen control
            });
            new window.google.maps.Marker({
                position: companyLocation,
                map: map,
            });
        };
        document.head.appendChild(script);
    }, []);

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default GrayscaleMap;
