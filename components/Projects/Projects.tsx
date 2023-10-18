import Image from 'next/image'
import React, { useState } from 'react'
import SampleProjects from './SampleData'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>('')

  return (
    <div className='projects'>
      {/* PROJECTS */}
      <div className='projects-container'>
        {/* List */}
        <div className='projects-sub-container'>
          <h1>Projects</h1>
          <div className='list'>
            {SampleProjects?.map(({ name }) => (
              <div key={name} className='name'>
                <button
                  id={`project-${name}`}
                  type='button'
                  className={selectedProject === name ? '--selected' : ''}
                  onClick={() => setSelectedProject(name)}
                >
                  {name}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className='image'>
          <Image
            src='/assets/img/linear-art.png'
            alt='linear-art'
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
