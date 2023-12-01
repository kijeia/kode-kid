import { ContentProps } from '@/types/components/_high'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Content = ({ selectedProject }: ContentProps) => {
  const [isProjectVisible, setIsProjectVisible] = useState(false)

  // Animation for Welcome Message
  const textToType =
    "~ to my digital playground! My name is Kidela Jane Gonzales, I'm a front-end software engineer, weaving pixels into delightful user experiences. With an iced coffee in hand and a passion for clean code, I bring ideas to life. Explore the bits and bytes of my portfolio, where each line of code tells a story. Let's build something awesome together! uwu"
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setIsProjectVisible(false)
    // Simulate some asynchronous operation, like fetching data
    setTimeout(() => {
      setIsProjectVisible(true)
    }, 1000) // Adjust the duration as needed
  }, [selectedProject?.name])

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
    <div className='content'>
      <div
        className={`selected-project ${isProjectVisible ? '--visible' : ''}`}
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
    </div>
  )
}

export default Content
