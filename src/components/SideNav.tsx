import React, { useEffect, useState } from 'react'
import {RiDashboardFill, RiTeamFill} from 'react-icons/ri'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {FaQuestionCircle} from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

function SideNav(props: any) {
    // State Active Style
    const [active, setActive] = useState('dashboard')
    const router = useRouter()
    useEffect(() => {
        
        if(router.pathname.includes(active)) {
            return
        }
        
        setActive(router.pathname)
        // return () => {
        //     cleanup
        // }
    }, [router.pathname])

    return (
         <div className="grid grid-col-5 lg:justify-center lg:items-center h-screen">
                    <div className="flex lg:flex-col md:flex-row lg:h-screen justify-between">
                        <div className="text-white text-center px-4 py-2 m-2">
                            <div className="flex justify-center items-center">
                                 <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="text-center px-4 py-2 m-2">
                            <div className="flex lg:flex-col md:flex-row gap-12">
                                <Link href="/dashboard">
                                    <div className="side-btn flex cursor-pointer">
                                        <div className={`flex-1 p-2 rounded-lg ${active.includes("dashboard") ? "bg-white border hover:bg-gray-100" : "bg-gray-100 hover:bg-white"} md:items-start md:justify-center`}>
                                            <RiDashboardFill className={`h-5 w-5 ${active.includes("dashboard") ? "text-black" : "text-gray-600"}`} />
                                        </div>
                                        <span className="flex-1 text-black side-txt absolute rounded-xl text-sm px-4 items-center justify-items-center py-1 bg-gray-100 hidden mt-1 ml-10">Dashboard</span>
                                    </div>
                                </Link>
                                <Link href="/report">
                                    <div className="side-btn flex cursor-pointer">
                                        <div className={`flex-1 p-2 rounded-lg ${active.includes("report") ? "bg-white border hover:bg-gray-100" : "bg-gray-100 hover:bg-white"} md:items-start md:justify-center`}>
                                            <HiOutlineDocumentReport className={`h-5 w-5 ${active.includes("report") ? "text-black" : "text-gray-600"}`} />
                                        </div>
                                        <span className="flex-1 text-black side-txt absolute rounded-xl text-sm px-4 items-center justify-items-center py-1 bg-gray-100 hidden mt-1 ml-10">Report</span>
                                    </div>
                                </Link>
                                <Link href="/team">
                                    <div className="side-btn flex cursor-pointer">
                                        <div className={`flex-1 p-2 rounded-lg ${active.includes("team") ? "bg-white border hover:bg-gray-100" : "bg-gray-100 hover:bg-white"} md:items-start md:justify-center`}>
                                            <RiTeamFill className={`h-5 w-5 ${active.includes("team") ? "text-black" : "text-gray-600"}`} />
                                        </div>
                                        <span className="flex-1 text-black side-txt absolute rounded-xl text-sm px-4 items-center justify-items-center py-1 bg-gray-100 hidden mt-1 ml-10">Team</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="text-white text-center px-4 py-2 m-2">
                            <div className="side-btn flex">
                                <button className="flex-1 text-center p-2 rounded-lg bg-gray-200 hover:bg-gray-100">
                                    <FaQuestionCircle
                                        className="h-5 w-5 text-gray-600"
                                    />
                                </button>
                                <span className="flex-1 text-black side-txt absolute rounded-xl text-sm px-4 items-center justify-items-center py-1 bg-gray-200 hidden mt-1 ml-10">FAQ</span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default SideNav
