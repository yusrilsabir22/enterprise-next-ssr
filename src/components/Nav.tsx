import React from 'react'
import {FaPowerOff} from 'react-icons/fa'
import {IoIosNotifications} from 'react-icons/io'
import {GoPrimitiveDot} from 'react-icons/go'
import { useLogoutMutation } from '../generated/graphql'
import { useApolloClient } from "@apollo/client";
import { useRouter } from 'next/router'


function Nav() {
    const router = useRouter()
    const [logout, {loading: logoutFetching}] = useLogoutMutation()
    const apolloClient = useApolloClient();
    return (
        <nav className="flex items-center justify-between flex-wrap border-b px-4 py-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6 md:block sm:hidden">
                <span className="font-semibold text-xl text-black">Owner</span>
            </div>
            <div className="flex-1">
                <input className="shadow appearance-none border rounded-full w-full sm:w-6/7 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="search"/>
            </div>
            <div className="pl-16 flex-grow lg:flex lg:items-center lg:justify-around lg:w-auto sm:hidden">
                <div className="flex lg:gap-16 text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-gray-600 mr-4">
                        Cashier
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-gray-600 mr-4">
                        Setting
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-gray-600">
                        Contact
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-gray-600">
                        Account
                    </a>
                </div>
                <div className="flex flex-row gap-32">
                    <a onClick={() => {
                        // logout()
                    }} href="#" className="relative inline-block leading-none rounded-full hover:border-transparent bg-transparant lg:mt-0">
                        <IoIosNotifications className="h-8 w-8 text-blue-600 hover:text-red-500" />
                        <div className="absolute top-0 right-0" style={{top: '-3px'}} >
                            <div className="h-3 w-3 rounded-full bg-yellow-600"/>
                        </div>
                    </a>

                    <a onClick={async () => {
                        await logout()
                        await apolloClient.resetStore()
                    }} href="#" className="inline-block p-1 text-white leading-none rounded-full hover:border-transparent hover:bg-red-800 bg-red-500 lg:mt-0">
                        <FaPowerOff className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
