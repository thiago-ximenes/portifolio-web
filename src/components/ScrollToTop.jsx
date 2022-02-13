import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'

function ScrollToTop() {
  return (
    <a
      href='#header'
    >
      <IoIosArrowUp
        className="cursor-pointer text-secondary
        fixed bottom-2 right-2 z-10 w-10 h-10
        bg-white rounded-full shadow-lg"
      />
    </a>
  )
}

export default ScrollToTop