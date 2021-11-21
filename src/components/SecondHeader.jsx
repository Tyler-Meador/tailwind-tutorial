import React from 'react'
import beach from '../images/beach-work.jpg'

const SecondHeader = () => {
    return (
        <div className="hidden relative lg:block 2xl:col-span-3">
            <img className="absolute inset-0 w-full h-full object-cover object-center" src={beach} alt="Woman workcationing on the beach" />
        </div>
    )
}

export default SecondHeader
