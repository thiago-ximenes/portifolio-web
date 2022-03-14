import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import projectsArray from '../../data/projectsArray';
import ExternalButton from '../ExternalButton';
import H2Styled from '../H2Styled';
import { useNavigate } from 'react-router-dom';

const SpotlightProjects: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section
      id="portifolio"
      className="flex flex-col items-center justify-center text-center text-gray-700"
    >
      <H2Styled title="Projeto em Destaque" />
      {
        projectsArray?.map((project) => {
          if (project.id === 3) return (
            <div
              key={ project.id }
            >
              <img
                src={ project.image }
                alt={ project.name }
                className="my-5 mx-auto"
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
                <ExternalButton
                  text="Projeto"
                  href={ project.liveUrl }
                  target
                  variant
                />
                <ExternalButton
                  text="Repositório"
                  href={ project.gitHubUrl }
                  target
                  variant
                />
              </div>
              <div
                className="flex flex-col md:flex-row w-full justify-around h-fit mx-auto py-4 md:my-8"
              >
                <button
                  type="button"
                  className="px-7 py-3 text-white font-bold bg-secondary rounded-lg
                  text-2xl md:w-9/12 w-content mx-2 mt-2 md:mt-0 text-center"
                  onClick={ () => navigate('portifolio') }
                >
                  <div
                    className="flex flex-row justify-center items-center md:text-3xl md:my-2"
                  >Ver Todos
                    <BsChevronDoubleRight
                      className="ml-4 md:text-3xl"
                    />
                  </div>
                </button>
              </div>
            </div>
          ) 
        })
      }

    </section>
  )
}

export default SpotlightProjects