'use client'

import "./style.css"
import { Navbar } from "flowbite-react";
import React from 'react';

const MyNavbar = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className="transparent-navbar"
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="../../../favicon.ico"
                    className="mr-3 h-6 sm:h-9"
                    alt="CS Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">IEEE CS MUJ</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/About">
                    About
                </Navbar.Link>
                <Navbar.Link href="/team">
                    Team
                </Navbar.Link>
                <Navbar.Link href="/Events">
                    Events
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;