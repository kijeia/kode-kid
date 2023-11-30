import {
  MajorProjects,
  CollaborativeProjects,
  ProjectSchema
} from '@/constants/projects'
import { ProjectsProps } from '@/types/components/_high'
import Image from 'next/image'
import React, { useState } from 'react'

const categories = ['work', 'collaborative', 'personal']
type Categories = 'work' | 'collaborative' | 'personal'

const Projects = ({ handleProject }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState('')
  const [selectedProjectList, setSelectedProjectList] =
    useState<ProjectSchema[]>(MajorProjects)
  const [selectedProjectCategory, selectProjectCategory] = useState<
    Categories | ''
  >('')

  const manageProject = (p: ProjectSchema) => {
    if (selectedProject === p?.name) handleProject(null)
    else handleProject(p)

    setSelectedProject(p?.name)
  }

  const manageCategory = (c: Categories) => {
    selectProjectCategory(c as Categories)

    if (c !== selectedProjectCategory) handleProject(null) // trigger if user change its category

    // find list of selected category
    if (c === 'work') setSelectedProjectList(MajorProjects)
    else if (c === 'collaborative')
      setSelectedProjectList(CollaborativeProjects)
    else setSelectedProjectList([])
  }

  return (
    <div className='projects'>
      <div className='projects-container'>
        {/* List */}
        <div className='projects-sub-container'>
          <h1>
            Projects:{' '}
            {categories?.map((c, i) => (
              <button
                key={c}
                id={c}
                type='button'
                className={`${selectedProjectCategory === c && '--selected'}`}
                onClick={() => manageCategory(c as Categories)}
              >
                {c} {i < 2 && <span className='text-secondary'> / </span>}
              </button>
            ))}
          </h1>

          <div className='list'>
            {selectedProjectList?.map((p) => (
              <div key={p.name} className='name'>
                <button
                  id={`project-${p.name}`}
                  type='button'
                  className={selectedProject === p.name ? '--selected' : ''}
                  onClick={() => manageProject(p)}
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
