'use client'

import { AppLayoutProps } from '@/types/components/_global'
import React from 'react'

const AppLayout = ({ children }: AppLayoutProps) => (
  <div className='app-layout'>{children}</div>
)

export default AppLayout
