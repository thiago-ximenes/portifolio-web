import React from 'react'
import projectsArray from '../../data/projectsArray'

function Carousel() {
  const obj = {
    oi: 'oi',
  }
  return (
    <section
      className="flex flex-row
      overflow-x-auto flex-nowrap whitespace-nowrap"
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
    </section>
  )
}

export default Carousel