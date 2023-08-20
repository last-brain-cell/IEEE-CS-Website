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
            <h1 className="text-blk head-text">About</h1>
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
                {/*<div className={"gradient-text-2"}>*/}
                {/*    <AnimatedGradientText>Wanna get to know us a little better? Scroll down</AnimatedGradientText>*/}
                {/*</div>*/}
            </div>
            <div className={"About-body"}>
                <div className="container-block container">

                    <div className="first-block card">
                        <div>
                            <img
                                src="/cslogo.png"
                                className="cslogo"/>
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
            </div>
            <h1 className="text-blk head-text">Mission</h1>
            <div className={"About-body-2"}>
                <div className="second-block card container-block">
                    <div>
                        <img
                            src="/cslogo.png"
                            className="cslogo"/>
                    </div>
                    <div>
                        <p className="about-cs-muj">
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
            <h1 className="text-blk head-text">Vision</h1>
            <div className={"About-body-2"}>
                <div className="second-block card container-block">
                    <div>
                        <img
                            src="/cslogo.png"
                            className="cslogo"/>
                    </div>
                    <div>
                        <p className="about-cs-muj">
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
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 md:py-14 lg:px-8 lg:py-12">
                <div className="grid border divide-y rounded-global divide-gray-300 max-w-7xl dark:border-slate-600 dark:divide-gray-600 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:col-span-3 2xl:mx-auto">
                    <div className="flex flex-col justify-between p-8 gap-y-4 lg:grid lg:grid-cols-3">
                        <div className="">
                            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-base">Total Amount</p>
                            <p className="text-2xl font-bold text-primary-500 sm:text-xl">$14 340 </p>
                        </div>
                        <div className="">
                            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-base">Products</p>
                            <p className="text-2xl font-bold text-primary-500 sm:text-xl">52</p>
                        </div>
                        <div className="">
                            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-base">Downloads</p>
                            <p className="text-2xl font-bold text-primary-500 sm:text-xl">186M</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-8 gap-y-4 lg:grid lg:grid-cols-3">
                        <div className="">
                            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-base">Users</p>
                            <p className="text-2xl font-bold text-primary-500 sm:text-xl">16K</p>
                        </div>
                        <div className="">
                            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-base">Visits</p>
                            <p class="text-2xl font-bold text-primary-500 sm:text-xl">917 000</p>
                        </div>
                        <div class="">
                            <p class="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-base">Subscribers</p>
                            <p class="text-2xl font-bold text-primary-500 sm:text-xl">213K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;