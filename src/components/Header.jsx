import React from 'react'
import beach from '../images/beach-work.jpg'

const Header = () => {
    return (
        <img 
            className="mt-6 rounded-lg shadow-xl
            sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center
            lg:hidden" 
            src={beach} 
            alt="Woman workcationing on the beach" 
        />
    )
}

export default Header
