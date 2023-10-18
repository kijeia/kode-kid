import type { Metadata } from 'next'
import 'styles/globals.scss'
import React, { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'KodeKid',
  icons: '/favicon.ico'
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
)
export default RootLayout
