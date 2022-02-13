import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setIsVisible(false)
        window.removeEventListener('scroll', handleScroll)
      } else {
        setIsVisible(true)
        window.addEventListener('scroll', handleScroll)
      }
    });

    intersectionObserver.observe(document.querySelector('#about'));

    return () => {
      intersectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    }
  }, [])

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function handleScroll() {
    setIsVisible(true)
    timeout();
  }

  function timeout() {
    setTimeout(() => {
      setIsVisible(false)
    }, 1000)
  }

  return (
    <button
      type="button"
      onClick={ scrollTop }
    >
      <IoIosArrowUp
        className={`cursor-pointer text-white
        fixed bottom-2 right-2 z-12 w-12 h-12
        bg-primary rounded-full shadow-lg
        p-2 transition-opacity hover:opacity-100
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </button>
  )
}

export default ScrollToTop