import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { CheckAuthDocument, CheckAuthQuery, useLoginMutation } from '../../generated/graphql';
import {Form, Field,Formik} from 'formik'
import InputField from '../../components/base/InputField';
import { toErrorMap } from '../../utils/utils';
import BaseLayout from '../../components/base/BaseLayout';
import { withApollo } from '../../utils/withApollo';
const Login = () => {
    const history = useRouter()
    let [login] = useLoginMutation()

    return (
        <BaseLayout>
            <div className="bg-gray-200 flex items-center justify-center h-screen">
                <Formik 
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={async (values, {setErrors}) => {
                        const response = await login({
                            variables: values,
                            update: (cache, {data}) => {
                                cache.writeQuery<CheckAuthQuery>({
                                    query: CheckAuthDocument,
                                    data: {
                                        __typename: "Query",
                                        checkAuth: data?.login.user
                                    }
                                })
                            }
                        });
                        // const response = await login(values);
                        console.log(response)
                        if(response.data?.login.errors) {
                            setErrors(toErrorMap(response.data.login.errors))
                        } else if(response.data?.login.user) {
                            const nextPath = history.query;
                            if(typeof nextPath.next === "string") {
                                history.replace(nextPath.next)
                            } else {
                                history.replace('/dashboard')
                            }
                        }
                    }}
                    >
                    {({isSubmitting}) => (
                        <Form className="bg-white shadow-xl w-1/7 rounded px-8 pt-6 pb-8 mb-4">
                            <InputField
                                name="username"
                                label="Username"
                                placeholder="Username"
                            />
                            <InputField
                                name="password"
                                label="Password"
                                placeholder="Password"
                                type="password"
                            />
                            <div className="flex items-center justify-between">
                                <button type="submit" className="flex flex-row gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    {
                                        isSubmitting ?
                                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-4 w-4"></div>
                                        : null
                                    }
                                    <span>Login</span>
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </BaseLayout>
    )
}

export default  withApollo({ssr: true})(Login)
