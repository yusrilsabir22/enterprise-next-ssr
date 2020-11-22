import React, { InputHTMLAttributes } from 'react'
import {useField, Field} from 'formik'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    size: _,
    ...props
}) => {
    const [field, {error}] = useField(name)
    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
                {label}
            </label>
            <input {...field} {...props} id={field.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            {error ? <span className="text-red-500">{error}</span> : null}
        </div>
    )
}

export default InputField
