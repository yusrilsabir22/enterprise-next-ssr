import React, { useRef, useState } from 'react'
import Card from '../../components/Card'
import BaseLayout from '../../components/base/BaseLayout'
import Form from '../../components/product/Form'
import Breadcrumb from '../../components/Breadcrumb'
import {useDispatch} from 'react-redux'
import { Screen } from '../../store/types'
import { FormikProps } from 'formik'

const Product = () => {
    const dispatch = useDispatch()
    const [isSubmit, setisSubmit] = useState(false)
    const myRef = useRef<FormikProps<{name: ''}>>(null)
    
    return (
        <div>
            <BaseLayout>
                    <Breadcrumb btnClick={(modal) => {
                        dispatch({
                            type: Screen.MODAL,
                            modal: modal
                        })
                    }} path={"/dashboard/product"} includeBtn={true} btnName={'Product'} />
                    <Form refs={myRef} isSubmitting={(isSubmit: boolean) => {
                          setisSubmit(isSubmit)
                      }} />
                    <button
                        className="flex flex-row gap-4 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={async () => {
                          await myRef.current?.submitForm();
                        //   props.onToggle(false)
                        //   console.log(myRef.current)
                        }}
                      >
                        {
                            isSubmit ?
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-4 w-4"></div>
                            : null
                        }
                        <span>Save Changes</span>
                      </button>
            </BaseLayout>
        </div>
    )
}

export default Product;