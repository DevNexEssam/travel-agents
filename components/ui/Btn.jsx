import React from 'react'

const Btn = ({label}) => {
  return (
    <button className='bg-background-orange px-5 py-3 rounded-[8px] mt-5 text-[12px] text-white'>
        {label}
    </button>
  )
}

export default Btn