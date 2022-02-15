import React, { useRef } from 'react'
import projectsArray from '../../data/projectsArray'
import { FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronCircleLeft } from 'react-icons/fa'

function Carousel() {
  const carouselRef = useRef(null)

  function nextProject(e) {
    e.preventDefault();
    console.log(carouselRef.current.offsetWidth);
  }

  return (
    <section
      className="flex flex-col overflow-x-auto"
    >
      <div
        ref={ carouselRef }
        className="flex flex-row overflow-x-auto"
      >
        {projectsArray.map((project) => (
          <img
            key={ project.id }
            className="p-2 flex-none"
            src={ project.image }
            alt="project.name"
          />
        ))
        }
      </div>
      <div
        className="flex flex-row justify-around mt-6"
      >
        <button
          type="button"
        >
          <FaChevronCircleLeft
            className="w-20 h-20"
          />
        </button>
        <button
          type="button"
          onClick={ nextProject }
        >
          <FaChevronCircleRight
            className="w-20 h-20"
          />
        </button>
      </div>
    </section>
  )
}

export default Carousel