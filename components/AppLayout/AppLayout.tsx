'use client'

import { AppLayoutProps } from '@/types/components/_global'
import React from 'react'
import Footer from '../_high/Footer'
import Header from '../_high/Header'

const AppLayout = ({ children }: AppLayoutProps) => (
  <div className='app-layout'>
    <Header />
    {children}
    <Footer />
  </div>
)

export default AppLayout
