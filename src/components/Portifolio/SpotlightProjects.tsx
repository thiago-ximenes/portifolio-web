import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import projectsArray from '../../data/projectsArray';
import Button from '../Button';
import H2Styled from '../H2Styled';

const SpotlightProjects: React.FC = () => {
  return (
    <section
      id="portifolio"
      className="flex flex-col items-center justify-center text-center text-gray-700"
    >
      <H2Styled title="Projeto em Destaque" />
      {
        projectsArray?.map((project) => {
          if (project.id === 3) return (
            <>
              <img
                src={ project.image }
                alt={ project.name }
                className="my-5"
              />
              <h3
                className="text-center mt-4 text-2xl font-bold md:text-5xl md:my-10"
              >
                { project.name }
              </h3>
              <p
                className="md:text-center text-xl my-3 text-justify md:text-3xl md:mb-10"
              >
                { project.description }
              </p>
              <div
                className="flex flex-row justify-center items-center"
              >
                <Button
                  text="Projeto"
                  href={ project.liveUrl }
                  target
                  variant
                />
                <Button
                  text="Repositório"
                  href={ project.gitHubUrl }
                  target
                  variant
                />
              </div>
              <div
                className="flex flex-col md:flex-row w-full justify-around h-fit mx-auto py-4 md:my-8"
              >
                <Button 
                >
                  <div
                    className="flex flex-row justify-center items-center md:text-3xl md:my-2"
                  >Ver Todos
                    <BsChevronDoubleRight
                      className="ml-4 md:text-3xl"
                    />
                  </div>
                </Button>
              </div>
            </>
          ) 
        })
      }

    </section>
  )
}

export default SpotlightProjects