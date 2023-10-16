import type { Metadata } from 'next'
import 'styles/globals.scss'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'KodeKid',
  icons: '/favicon.ico'
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang='en'>{children}</html>
)
export default RootLayout
