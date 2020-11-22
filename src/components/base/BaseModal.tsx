import React, { useRef, useState } from 'react'
import BaseDrop from './BaseDrop'
import Dropzone from 'react-dropzone'
import ProductForm from '../product/Form'
import { FormikProps } from 'formik'

type BaseModalProps = {
    show: boolean;
    component?: any;
    onToggle: (show: boolean) => void;
}

const BaseModal: React.FC<BaseModalProps> = (props) => {
    const [isSubmit, setisSubmit] = useState(false)
    const myRef = useRef<FormikProps<{name: ''}>>(null)

    if(props.show) {
        return (
            <div className="w-5/7">
              <div className="z-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Add Product
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-gray-400 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => props.onToggle(false)}
                      >
                        <span className="bg-transparent text-gray-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative">
                      <ProductForm refs={myRef} isSubmitting={(isSubmit: boolean) => {
                          setisSubmit(isSubmit)
                      }} />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => props.onToggle(false)}
                      >
                        Close
                      </button>
                      <button
                        className="flex flex-row gap-4 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={async () => {
                          await myRef.current?.submitForm();
                          props.onToggle(false)
                          console.log(myRef.current)
                        }}
                      >
                        {
                            isSubmit ?
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-4 w-4"></div>
                            : null
                        }
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>   
            </div>
        )
    } else {
        return <div/>
    }
}

export default BaseModal
