import React from 'react'
import { createUrqlClient } from '../utils/createUrqlClient'
import {withUrqlClient} from 'next-urql'
import { withApollo } from '../utils/withApollo'
const index = () => {
    return (
        <div>
            hello
        </div>
    )
}

export default withApollo({ssr: true})(index)
