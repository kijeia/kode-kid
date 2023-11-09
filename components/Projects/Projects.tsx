import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SampleProjects, { ProjectSchema } from './SampleData'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectSchema | null>(
    null
  )
  const [isProjectVisible, setIsProjectVisible] = useState(false)

  const textToType =
    "~ to my digital playground! My name is Kidela Jane Gonzales, I'm a front-end software engineer, weaving pixels into delightful user experiences. With an iced coffee in hand and a passion for clean code, I bring ideas to life. Explore the bits and bytes of my portfolio, where each line of code tells a story. Let's build something awesome together! uwu"
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Simulate some asynchronous operation, like fetching data
    setTimeout(() => {
      setIsProjectVisible(true)
    }, 1000) // Adjust the duration as needed
  }, [selectedProject?.name])

  const handleLink = (p: ProjectSchema) => {
    if (selectedProject?.name === p?.name) setSelectedProject(null)
    else setSelectedProject(p)
    setIsProjectVisible(false)
  }

  useEffect(() => {
    const delay = 50 // Adjust the delay (in milliseconds) for the typing speed

    const interval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setDisplayText(textToType.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else {
        clearInterval(interval)
      }
    }, delay)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className='projects'>
      {/* SELECTED PROJECT */}

      <div
        className={`selected-project hover ${
          isProjectVisible ? '--visible' : ''
        }`}
      >
        {selectedProject !== null ? (
          <>
            {/* Selected Project */}
            <div className='__title'>
              <Image
                src='/assets/img/bookmark.png'
                alt='email'
                width={32}
                height={32}
              />
              <span>{selectedProject?.name}</span>
            </div>

            <p className='__description'>{selectedProject?.description}</p>

            <hr />

            <div className='__roles'>
              {selectedProject?.roles?.map((r) => <div key={r}>● {r}</div>)}
            </div>

            <div className='__bottom'>
              <div className='__technologies'>
                <h1>Key Technologies: </h1>
                {selectedProject?.keyTechnologies?.map((stack, i) => (
                  <div key={stack}>
                    {i + 1 === selectedProject?.keyTechnologies?.length! &&
                      ' and '}
                    {stack}
                    {i + 1 < selectedProject?.keyTechnologies?.length! && ','}
                  </div>
                ))}
              </div>
              <div className='__links'>
                {selectedProject?.links?.map(({ label, link }) => (
                  <Link key={label} href={link} target='_blank'>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className='__welcome'>
            {/* Welcome Message */}

            <div>Welcome. </div>
            {displayText}
          </div>
        )}
      </div>

      {/* PROJECTS */}
      <div className='projects-container'>
        {/* List */}
        <div className='projects-sub-container'>
          <h1>Projects</h1>
          <div className='list'>
            {SampleProjects?.map((p) => (
              <div key={p.name} className='name'>
                <button
                  id={`project-${p.name}`}
                  type='button'
                  className={
                    selectedProject?.name === p.name ? '--selected' : ''
                  }
                  onClick={() => handleLink(p)}
                >
                  {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className='image'>
          <Image
            src='/assets/img/coder.png'
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
