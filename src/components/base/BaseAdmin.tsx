import { useRouter } from 'next/router'
import React from 'react'
import { DefaultState } from '../../store/reducers'
import { useIsAuth } from '../../utils/useIsAuth'
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../Nav'
import SideNav from '../SideNav'
import StatisticWidget from '../StatisticWidget'
import Table from '../Table'
import BaseModal from './BaseModal'
import { Screen } from '../../store/types'

/**
 * Skleton Base Admin
 * -------------------------------------------------------------------------
 * -  S -|             NAVIGATION                  |                       |
 * -  I -|                                         |                       |
 * -  D -------------------------------------------|                       | 
 * -  E -|                                         |                       |
 * -    -|                                         |                       |
 * -  N -|                                         |                       |
 * -  A -|                                         |                       |
 * -  V -|                                         |      RIGHT PANEL      |
 * -  G -|              PAGE CONTENT               |                       |
 * -  I -|                                         |                       |
 * -  A -|                                         |                       |
 * -  T -|                                         |                       |
 * -  I -|                                         |                       |
 * -  O -|                                         |                       |
 * -  N -|                                         |                       |
 * -------------------------------------------------------------------------
 */

const BaseAdmin = (props: any) => {
    useIsAuth()
    const modal = useSelector((state: DefaultState) => state.modal)
    const dispatch = useDispatch()
    return (
        <div className="relative h-screen w-screen overflow-visible">
            {/* Navigation */}
            <div className="flex fixed inset-x-0 top-0 h-12 z-20 w-5/7 lg:pl-16 md:w-5/7 lg:w-5/7 xl:w-7/9">
                <div className="flex-1 items-center justify-items-center w-auto h-auto">
                    <Nav />
                </div>
            </div>
            {/* Side Navigation */}
            <div className="fixed lg:h-screen lg:inset-y-0 lg:left-0 lg:w-16 md:h-16 md:inset-x-0 md:bottom-0 md:w-full sm:h-16 sm:inset-x-0 sm:bottom-0 sm:w-full bg-gray-100 border z-40">
                <SideNav />
            </div>
            {/* Right Panel */}
            <div className="fixed bg-white inset-y-0 right-0 xl:w-2/9 lg:w-2/7 md:w-2/7 border px-4 pt-4 z-10 lg:block md:block sm:hidden">
                <div className="h-screen overflow-y-auto">
                    <div className="p-1 pb-16 flex flex-col divide-y divide-gray-400 gap-2">
                        <div className="sticky top-0 bg-white lg:w-full p-3">
                            <h1 className="text-2xl font-bold">Acitivity</h1>
                        </div>
                        <StatisticWidget type="BAR" width="L" />
                        <div className="shadow-xl mt-6">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Content */}
            <div className="fixed h-screen overflow-y-auto lg:w-5/7 xl:w-7/9 md:w-5/7 md:ml-0 mt-20 xl:pb-16 md:pb-20 z-0">
                <div className="p-1 lg:pb-16 pt-5 md:pb-20 lg:pl-20">

                    {/* pass the sub-routes down to keep nesting */}
                    {props.children}
                </div>
            </div>
            <BaseModal show={modal} onToggle={(show) => {
                dispatch({
                    type: Screen.MODAL,
                    modal: show
                })
            }} />
        </div>
    )
}

export default BaseAdmin;
