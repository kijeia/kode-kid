'use client'

import { HeaderProps } from '@/types/components/_high'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

// eslint-disable-next-line no-empty-pattern
const Header = ({ setToHome }: HeaderProps) => {
  const router = useRouter()
  const params = useSearchParams()

  const handleRoute = () => {
    if (params.get('page') === 'me') {
      // if in profile page
      router.replace('/')
    } else {
      setToHome()
    }
  }

  return (
    <div className='header'>
      <button id='logo-btn' type='button' onClick={handleRoute}>
        <Image src='/assets/img/logo.png' alt='logo' width={60} height={60} />
      </button>
      <div className='nav-bar'>
        <button
          id='profile-btn'
          type='button'
          onClick={() => router.replace('?page=me')}
        >
          <Image
            src='/assets/img/me.png'
            alt='profile'
            width={28}
            height={28}
          />
        </button>
        <a href='mailto:kijeia.gonzales@gmail.com'>
          <Image
            src='/assets/img/email.png'
            alt='email'
            width={28}
            height={28}
          />
        </a>
        <Link href='https://github.com/kijeia?tab=repositories' target='_blank'>
          <Image
            src='/assets/img/github.png'
            alt='email'
            width={28}
            height={28}
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
