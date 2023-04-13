import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Map } from "mapbox-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxMap = (props) => {
    const mapContainer = useRef(null);
    const container = useRef(null);
    const [mapHeight, setMapHeight] = useState(null);

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API;

    useEffect(() => {
        // Initialize map
        if (mapContainer.current.clientWidth > 0) {
            const map = new Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/light-v11",
                center: [16.1886, 47.72511],
                pitch: 45,
                zoom: 15.5,
                bearing: -17.6,
                antialias: true,
            });

            const marker = new mapboxgl.Marker({
                color: "#B2AC97",
            })
                .setLngLat([16.1886, 47.72511])
                .addTo(map);

            map.addControl(
                new mapboxgl.NavigationControl({
                    visualizePitch: true,
                    showZoom: true,
                })
            );
            // Get height of container and set mapHeight state
            console.log(mapContainer.current.clientWidth);

            setMapHeight(mapContainer.current.clientWidth);
        }
    }, [mapContainer.current]);

    useEffect(() => {
        // Get height of container and set mapHeight state
        if (mapContainer.current) {
            setMapHeight(mapContainer.current.clientWidth);
            console.log(mapContainer.current.clientWidth);
        }
    }, []);

    return (
        <div className="map-container" ref={container} style={{ height: "100%" }}>
            <div className="map h-full" style={{ height: mapHeight }} ref={mapContainer}></div>
        </div>
    );
};

export default MapboxMap;
