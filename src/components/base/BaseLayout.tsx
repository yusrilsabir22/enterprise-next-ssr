import { useRouter } from 'next/router'
import React from 'react'
import BaseAdmin from './BaseAdmin'
import { isServer } from '../../utils/isServer'
import { useCheckAuthQuery } from '../../generated/graphql'
import { withApollo } from '../../utils/withApollo'
import Loading from '../Loading'

const BaseLayout = (props:any) => {
    const router = useRouter()
    
    const {data, loading} = useCheckAuthQuery({
        skip: isServer()
    });

    const {isFallback} = router
    if(loading) {
        // return <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"/>
        return <></>
    } else if(isFallback) {
        return <div>Hello WOrld</div>
    } else if(data?.checkAuth) {
        if(router.pathname.includes('/login')) {
            return props.children
        }
        // console.log(isFallback)
        return (
            <BaseAdmin {...props}>
                {isFallback ? <Loading/> : props.children}
                {/* {props.children} */}
            </BaseAdmin>
        )
    } else {
        if(!router.pathname.includes('/login')) {
            try {
                router.replace('/login')
            } catch (error) {
                
            }
        }
        return (
            props.children
        )
    }
}

export default withApollo({ssr: false})(BaseLayout)
