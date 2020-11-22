import React, { useState } from 'react'
import BaseLayout from '../../components/base/BaseLayout'
import DashboardChild from '../../components/DashboardChild'
import { BaseProps } from '../../types'
import {useInsertNewImageMutation} from '../../generated/graphql'
import { withApollo } from '../../utils/withApollo'


interface DashboardProps extends BaseProps {
    
}

const Dashboard: React.FC<DashboardProps> = (props) => {
    
    const [insertNewImage, {data, error}] = useInsertNewImageMutation()
    
    const [img, setImg] = useState()
    return (
        <BaseLayout>
            <input type="file" name="img" onChange={async (e) => {
                // console.log(e.target.files)
                // if(e.target.files) {
                //     setImg(e.target.files[0] as any)
                // }
                try {
                    const img1 = e.target.files![0]
                    const formData = new FormData()
                    formData.append('file', img1);
                    const response = await insertNewImage({variables: {file: formData.get("file")}})
                    console.log(response.errors)
                } catch (error) {
                    console.log(error)
                }
            }} />
            <button onClick={async () => {
                try {
                    console.log(img)
                    const response = await insertNewImage({variables: {file: img}})
                    console.log(response.errors)
                } catch (error) {
                    console.log(error)
                }
            }}>Submit</button>
            <DashboardChild {...props} />
        </BaseLayout>
    )
}

export default withApollo({ssr: false})(Dashboard)
