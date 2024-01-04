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

const Projects = ({ handleProject, selectedProject }: ProjectsProps) => {
  const [selectedProjectList, setSelectedProjectList] =
    useState<ProjectSchema[]>(MajorProjects)
  const [selectedProjectCategory, selectProjectCategory] = useState<
    Categories | ''
  >('')

  const [isTooltipVisible, setTooltipVisibility] = useState(false)

  const manageProject = (p: ProjectSchema) => {
    if (selectedProject?.name === p?.name) handleProject(null)
    else handleProject(p)
  }

  const manageCategory = (c: Categories) => {
    if (c === 'personal') return // disabled when selected category is 'personal'

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
                className={`${c === 'personal' && 'tooltip-container'} ${
                  selectedProjectCategory === c && '--selected'
                }`}
                onClick={() => manageCategory(c as Categories)}
                onMouseEnter={() =>
                  c === 'personal' && setTooltipVisibility(true)
                }
                onMouseLeave={() =>
                  c === 'personal' && setTooltipVisibility(false)
                }
              >
                {c} {i < 2 && <span className='text-secondary'> / </span>}
                {isTooltipVisible && c === 'personal' && (
                  <div className='tooltip'>
                    Hang in there, Work in progress . . .{' '}
                  </div>
                )}
              </button>
            ))}
          </h1>

          <div className='list'>
            {selectedProjectList?.map((p) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={`${p.name}`} className='name'>
                <button
                  id={`project-${p.name}`}
                  type='button'
                  className={
                    selectedProject?.name === p.name ? '--selected' : ''
                  }
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
