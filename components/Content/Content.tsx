'use client'

import { ContentProps } from '@/types/components/_global'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import SampleProjects from './SampleData'

// eslint-disable-next-line no-empty-pattern
const Content = ({ children }: ContentProps) => {
  const searhParams = useSearchParams()
  const projectName = searhParams.get('project')

  return (
    <div className='content'>
      <div>{children}</div>

      {/* PROJECTS */}
      <div className='projects-container'>
        {/* List */}
        <div className='projects'>
          <h1>Projects</h1>
          <div className='list'>
            {SampleProjects?.map(({ name }) => (
              <div key={name} className='name'>
                <Link
                  href={`?project=${name}`}
                  className={`${projectName === name && '--selected'}`}
                >
                  {name}
                </Link>
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

export default Content
