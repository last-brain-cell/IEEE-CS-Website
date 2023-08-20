'use client'
import kyd from '../../../public/kyd.png'
import React from 'react';

const Card = () => {
    return (
        <div>

            <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={kyd} alt="product image"/>
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Know Your Domain</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                    </div>
                    <button type="button" className="text-black bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Register Now</button>
                </div>
            </div>

        </div>
    );
};

export default Card;