import React from 'react'
// border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
function Card() {
    return (
        <>
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2" alt="" className="h-full w-full"/>
            </div>

            <h2 className="mt-4 font-bold text-xl">Sebastian Bennett</h2>
            <h6 className="mt-2 text-sm font-medium">Founder</h6>

            <p className="text-xs text-gray-500 text-center mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
            </p>

            <ul className="flex flex-row mt-4 space-x-2">
                <li>
                    <a href="" className="flex items-center justify-center h-8 w-8 rounded-full text-gray-800 border-gray-800">
                        <FaFacebook className="text-blue-800 h-full w-full"/>
                    </a>
                </li>
                <li>
                    <a href="" className="flex items-center justify-center bg-blue-600 p-2 h-8 w-8 rounded-full text-gray-800 border-gray-800">
                        <FaTwitter className="text-white h-full w-full" />
                    </a>
                </li>
                <li>
                    <a href="" className="flex items-center justify-center h-8 w-8 bg-red-500 p-1 rounded-full text-gray-800 border-gray-800">
                        <FaInstagram className="text-white h-full w-full" />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Card
