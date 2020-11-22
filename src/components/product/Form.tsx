import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {Formik, Form as FormFormik, FormikProps} from 'formik'
import InputField from '../base/InputField'
import { withApollo } from '../../utils/withApollo'
import { useGetCategoryQuery, useInsertNewProductMutation } from '../../generated/graphql'
import BaseDrop from '../base/BaseDrop'
import SelectDropdown from '../SelectDropdown'
import { isServer } from '../../utils/isServer'

type ProductFormProps = {
    isSubmitting?: (value: boolean) => void;
    refs: FormikProps<{name: string}>
}

const ProductForm: React.FC<ProductFormProps> = (props: any) => {
    const myRefs: HTMLDivElement[] = []
    const initialFiles = {name: '', lastModified: 0, size: 0, type: ''} as File
    const [Index, setIndex] = useState(0)
    const [images, setimages] = useState(['0'])
    const [insertNewProduct] = useInsertNewProductMutation();
    const {data, loading} = useGetCategoryQuery({skip: isServer()})
    
    const [files, setFiles] = useState([initialFiles] as File[])
    const memo = useMemo(() => files.filter(v => v !== initialFiles) ,[files])
    const [category, setCategory] = useState(data?.getCategories[0])
    const [id, setid] = useState("");

    const onDrop = (data: File, index?: number) => {
        // files[key!] = data;
        let f = [data, ...files]
        console.log('index '+index, 'files length '+files.length)
        if(files[index!] !== initialFiles) {
            files[index!] = data
            const l = parseInt((files.length / 2).toFixed(0))
            console.log(parseInt(l.toFixed(0)))
            if(index! === (files.length - 1)) {
                console.log('index at last')
                setFiles(prev => [...files, initialFiles]);
                return
            } else if(index! === 0) {
                // let fi = files.filter(v => v !== initialFiles)
                console.log('index at first', files)
                setFiles(prev => [...files])
                return
            } else {
                console.log('index at mid')
                setFiles(prev => [...files])
                return
            }
        } else {
            setFiles(prev => [...f]);
            return
        }
    }

    const onDeleteFile = (file: File, idx: number) => {
        let filez = files.filter(v => v !== file)
        if(filez.length === 0) {
            setFiles(prev => [initialFiles])
        } else {
            setFiles(prev => [...filez])
        }
    }

    const selectDropDown = (id: string) => {
        const cat = data?.getCategories.findIndex(val => val.id === id)
        console.log(cat)
        if(cat! >= 0) {
            // @ts-ignore
            setCategory(data?.getCategories![cat])
            // @ts-ignore
            setid(data?.getCategories![cat].id)
        }
    }

    return (
        <div className="w-full">
            <Formik
                initialValues={{name: ''}}
                onSubmit={async (values, data) => {
                    
                    props.isSubmitting(true);
                    let fil = files.filter(v => v !== initialFiles)
                    fil.pop()
                    setFiles(prev => [...fil])
                    const response = await insertNewProduct({
                        variables: {
                            categoryID: category!.id,
                            name: values.name,
                            files: fil
                        }
                    });
                    props.isSubmitting(false)
                }}
                innerRef={props.refs}
            >
                
                {() => (
                    <FormFormik className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                        <InputField
                            name="name"
                            placeholder="Name"
                            label="Name"
                        />
                        <SelectDropdown selectedId={id} loading={loading} data={data?.getCategories! || []} onChange={selectDropDown} category={category} />
                        <div className="grid grid-flow-rows grid-rows-3 grid-cols-3 items-center justify-center gap-4 mt-5">
                            {
                                // files.length <= 0 ?
                                //     <div tabIndex={0} ref={refs => myRefs.push(refs!)} className="bg-gray-500 relative box h-64 lg:h-80">
                                //         <BaseDrop onDeleteFile={onDeleteFile} key={0} disabled={false} idx={0} onChangeFiles={onDrop} />
                                //     </div> :
                                files.map((_: any, i: number) => {
                                    return (
                                        <div tabIndex={i} ref={refs => myRefs.push(refs!)} className="bg-gray-500 relative box h-64 lg:h-80">
                                            <BaseDrop selectedFile={files[i]} onDeleteFile={onDeleteFile} key={i} disabled={false} idx={i} onChangeFiles={onDrop} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </FormFormik>
                )}
            </Formik>
        </div>
    )
}

export default withApollo({ssr: false})(ProductForm);
