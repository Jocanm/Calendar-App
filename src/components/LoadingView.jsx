import React from 'react'
import ReactLoading from 'react-loading';

const Loading = ({color="#000"}) => {
    return (
        <div className="h-screen mx-auto flex items-center justify-center">
            <ReactLoading type="spin" height="8%" width="8%" color={color} />
        </div>
    )
}

export default Loading
