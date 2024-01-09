'use client'

import AppLayout from '@/components/AppLayout'
import Content from '@/components/_high/Content'
import Footer from '@/components/_high/Footer'
import Header from '@/components/_high/Header'
import Projects from '@/components/_high/Projects'
import { ProjectSchema } from '@/constants/projects'
import { useState } from 'react'

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectSchema | null>()

  return (
    <AppLayout>
      <Header setToHome={() => setSelectedProject(null)} />
      <div className='flex flex-1 flex-col justify-between'>
        <Content selectedProject={selectedProject ?? null} />
        <Projects
          handleProject={setSelectedProject}
          selectedProject={selectedProject as ProjectSchema}
        />
      </div>
      <Footer />
    </AppLayout>
  )
}

export default Home
