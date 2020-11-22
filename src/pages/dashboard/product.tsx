import React from 'react'
import Card from '../../components/Card'
import BaseLayout from '../../components/base/BaseLayout'
import Form from '../../components/product/Form'
import Breadcrumb from '../../components/Breadcrumb'
import {useDispatch} from 'react-redux'
import { Screen } from '../../store/types'

const Product = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <BaseLayout>
                    <Breadcrumb btnClick={(modal) => {
                        dispatch({
                            type: Screen.MODAL,
                            modal: modal
                        })
                    }} path={"/dashboard/product"} includeBtn={true} btnName={'Product'} />
                    <Form/>
            </BaseLayout>
        </div>
    )
}

export default Product;