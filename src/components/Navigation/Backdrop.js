import React from 'react'

function Backdrop({ show, close }) {
  return (
    show ? <div className='fixed w-full h-full bg-black z-10 opacity-70 top-0' onClick={close}></div> : null
  )
}

export default Backdrop
