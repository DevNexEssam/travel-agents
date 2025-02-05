import React from 'react'

const Btn = ({label}) => {
  return (
    <button className='bg-background-orange px-[35px] py-3 rounded-[8px] mt-5 text-[12px] text-white capitalize'>
        {label}
    </button>
  )
}

export default Btn