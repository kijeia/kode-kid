'use client'

import Image from 'next/image'

// eslint-disable-next-line no-empty-pattern
const Header = ({}) => (
  <div className='header'>
    <Image src='/assets/img/logo.png' alt='logo' width={60} height={60} />
    <div className='nav-bar'>
      <button id='profile-btn' type='button' onClick={() => {}}>
        <Image src='/assets/img/me.png' alt='profile' width={28} height={28} />
      </button>
      <button id='email-btn' type='button' onClick={() => {}}>
        <Image src='/assets/img/email.png' alt='email' width={28} height={28} />
      </button>
      <button id='github-btn' type='button' onClick={() => {}}>
        <Image
          src='/assets/img/github.png'
          alt='email'
          width={28}
          height={28}
        />
      </button>
    </div>
  </div>
)

export default Header
