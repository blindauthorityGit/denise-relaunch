import React, { useState, useRef, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

const UnderConstruction = ({ videoFile }) => {
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current && videoRef.current.play();
    }, []);

    return (
        <div className="hero-container relative h-screen w-full bg-[#3b3720]">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 h-full w-full object-cover"
                onLoadedData={() => setLoaded(true)}
            >
                <source src={videoFile} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center font-freight text-white">
                <Parallax translateY={["-100px", "50px"]}>
                    <h1 className="mb-4 text-4xl font-bold text-primaryColor-300 sm:text-6xl">Wir sind bald zurück!</h1>
                    <p className="mb-8 text-lg">
                        Unsere Website wird gerade neu gestaltet. Freuen Sie sich auf frische Inhalte und Ideen!
                    </p>
                    <div className="mt-6 space-y-2 text-lg">
                        <p>Kontaktieren Sie uns:</p>
                        <p>Telefon: +43 650 80 11 900</p>
                        <p>Email: office@baeckerin.at</p>
                    </div>
                </Parallax>
            </div>
        </div>
    );
};

export default UnderConstruction;
