"use client"

import "./style.css"
import React from 'react';
import {AnimatedGradientText} from "../Components/Animation/page";
import {TypeAnimation} from "react-type-animation";
import Image from "next/Image";
import Footer from "../Components/shared/Footer/footer";

const About = () => {
    return (
        <div>
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
            <div className={"About"}>
                <div className="container-block container">
                    <h1 className="text-blk team-head-text">About</h1>
                    <div className="first-block">
                        <div>
                            <img
                                src="/cslogo.png"
                                className="cslogo"
                                width={"100%"}
                            />
                        </div>
                        <div>
                            <p className="about-cs-muj"><br />
                                “Serving computing at its best with inclusion and diversity” is the prime motto of the IEEE Computer Society.
                                This society was created keeping in mind IEEE’s continued commitment to providing options at best.
                                The IEEE Computer Society is driven by the central goals of equity, diversity, inclusion, and yearn to serve computing at its perfection.
                                With an intent to expand the IEEE’s reach and learnings, this society was started a year back in early 2020. Since then, society has tried every
                                possible course of action by conducting diverse events such as webinars, competitions, workshops, and mentorship programs to set a goal for the young achievers.
                                The members of IEEE CS have been skilled and earned minimal expertise in roughly all possible sub-sections of CS via our accelerator program.
                                The senior student mentors steer them on each stage they take and deliver them with the professional material for further reference.
                                We aim to proactively support diversity and inclusion by being the premier source for information, inspiration, and collaboration
                                in computer science and engineering. Connecting members on campus, this IEEE Computer Society empowers the students who wish to advance
                                in technology by delivering tools at all stages of their professional careers.
                                “Computer science is the operating system for all innovations.”
                                At IEEE CS, we look at it similarly, trying to make a better world by working as a team.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="empty-div">
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default About;