import React, { useState } from 'react'
import {BsPlus} from 'react-icons/bs'
import Link from 'next/link'
import { capitalizeFirstLetter } from '../utils/utils'
import { useRouter } from 'next/router'
import {useSelector} from 'react-redux'
import { DefaultState } from '../store/reducers'

type BreadcrumbProps = {
    includeBtn?: boolean;
    btnName?: string;
    path: string;
    btnClick: (e: any) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
    // const arr = []
    const router = useRouter()
    const pathName = router.pathname.split('/')
    pathName.shift();
    const modal = useSelector((state: DefaultState) => state.modal)
    // const pathName = ["dashboard", "product"]
    // const themeState: ThemeState = useSelector((state: any) => state?.theme)
    // const dispatch = useDispatch()
    const renderNavLink = () => {
        return pathName.map((v: any, i: number) => {
            if(i === (pathName.length - 1)) {
                return (
                    <li className="text-gray-600">{capitalizeFirstLetter(v)}</li>
                )
            } else {
                return (
                    <>
                        <li key={i}><Link href={`/${v}`}><span className="text-blue font-bold">{capitalizeFirstLetter(v)}</span></Link></li>
                        <li key={new Date().getTime()}><span className="mx-2 text-gray-800">/</span></li>
                    </>
                )
            }
        })
    }

    return (
         <nav className="sticky top-0 p-3 z-40 bg-white flex justify-between font-sans w-full">
            <ol className="list-reset flex text-grey-dark items-center justify-center">
                {renderNavLink()}
            </ol>
            {
                props.includeBtn ?
                <button onClick={() => props.btnClick(!modal)} className="center bg-green-600 rounded-full hover:bg-teal-400 text-white py-2 px-4 font-bold rounded inline-flex focus:outline-none focus:shadow-outline">
                    <BsPlus className="h-6 w-6" /><span>{props.btnName}</span>
                </button> : null
            }
        </nav>
    )
}

export default Breadcrumb
