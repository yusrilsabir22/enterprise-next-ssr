import React, { useCallback, useEffect, useRef, useState } from 'react'
import Dropzone,{useDropzone, DropEvent, FileRejection} from 'react-dropzone'

interface BaseDropProps {
    onChangeFiles: (file: File, key?: number) => void;
    disabled?: boolean;
    idx?: number;
    onDeleteFile?: (file: File, idx: number) => void;
    selectedFile?: File;
}

interface BaseBoxProps {
    isDragActive: boolean;
    image: File;
    onDeleteFile?: (file: File) => void;
}

const Box: React.FC<BaseBoxProps> = ({isDragActive, image, onDeleteFile}) => {

    const initialFiles = {name: '', lastModified: 0, size: 0, type: ''} as File
    const [ImgUrl, setImgUrl] = useState(initialFiles as File)
    useEffect(() => {
        setImgUrl(image)
    }, [image])

    return (
        <div className={`absolute z-35 w-full h-full right-0 top-0 left-0 bottom-0${isDragActive ? " border border-2 border-red-500" : ""}`}>
                {
                    ImgUrl!.name !== "" ? <img className="object-fill h-full w-full" src={ImgUrl.name === "" ? '' : URL.createObjectURL(ImgUrl)} /> :
                    <div className="flex items-center justify-center h-full">
                        <p className="text-white font-bold">Add Image</p>
                    </div>
                }
                {
                    ImgUrl!.name !== "" ?
                    <button type="button" onClick={e =>{onDeleteFile!(image); setImgUrl(initialFiles)}} className="px-4 py-1 rounded-full absolute right-0 bg-red-400 focus:outline-none focus:shadow-outline" style={{top: -10, right: -10}}>
                        <span className="text-white text-semibold text-2xl flex items-center justify-center py-0">x</span>
                    </button> : null
                }
        </div>
    )
}

const BaseDrop: React.FC<BaseDropProps> = (props) => {
    let p = props
    const myRef = useRef(null)
    const [deleted, setDeleted] = useState(false)
    const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[], event: DropEvent) => {
        // event.
        p.onChangeFiles(acceptedFiles[0], p.idx)
        setDeleted(true)
    }

    const onDeleteFile = (file: File) => {
        p.onDeleteFile!(file, p.idx!)
        setDeleted(false)
    }

    return (
        <Dropzone {...props} noDrag={props.disabled} disabled={props.disabled} onDrop={onDrop} ref={myRef}>
            {({getRootProps, getInputProps, isDragActive, acceptedFiles}) => {
                const d = (f: File) => {
                    onDeleteFile(f)
                }
                return (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} className="z-20" disabled={deleted} />
                        <Box onDeleteFile={(f: File) => d(f)} isDragActive={isDragActive} image={props.selectedFile ? props.selectedFile : acceptedFiles[0]} /> 
                    </div>
                )
            }}
        </Dropzone>
    )
}

export default React.memo(BaseDrop)
