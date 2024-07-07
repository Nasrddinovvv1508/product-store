import React from 'react'

function MainButton({ text }) {
    return (
        <button className='btn hover:bg-[#a65f13] bg-[#DC780B] text-white font-medium text-base capitalize'>
            {text}
        </button>
    )
}

export default MainButton