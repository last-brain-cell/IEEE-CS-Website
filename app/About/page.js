"use client"

import "./style.css"
import React from 'react';
import {AnimatedGradientText} from "../Components/Animation/page";
import {TypeAnimation} from "react-type-animation";

const About = () => {
    return (
        <div className={"gradient-text"}>
            <AnimatedGradientText>IEEE Computer Society</AnimatedGradientText>
            <AnimatedGradientText>
                <TypeAnimation
                    sequence={[
                        "Exploring new horizons...",
                        1200,
                        "Creating innovative solutions...",
                        1100,
                        "Pushing the boundaries...",
                        1050,
                        "Turning ideas into reality...",
                        950,
                        "Embracing the digital age...",
                        1020,
                        "Innovating for a brighter future...",
                        1150,
                        "We basically like tech...",
                        1000,
                        "We are IEEE CS.",
                        1000
                    ]}
                    speed={60}
                    repeat={Infinity}
                    style={
                        { fontSize: '1em' }}
                />
            </AnimatedGradientText>
            <div className={"gradient-text-2"}>
                <AnimatedGradientText>Wanna get to know us a little better? Scroll down</AnimatedGradientText>
            </div>
        </div>
    );
};

export default About;