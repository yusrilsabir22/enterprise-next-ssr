import React from 'react'

const Loading = () => {
    console.log('Loading Component Rendered')
    return (
        <div className="fixed top-0">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"/>
        </div>
    )
}

export default Loading
