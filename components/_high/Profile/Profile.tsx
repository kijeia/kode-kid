import Image from 'next/image'
import { useState } from 'react'

const socialList = [
  { platform: 'email', connectAt: 'kijeia.gonzales@gmail.com' },
  {
    platform: 'linkedIn',
    connectAt: ' www.linkedin.com/in/kidelajane-gonzales'
  },
  { platform: 'github', connectAt: 'https://github.com/kijeia' }
]
// eslint-disable-next-line no-empty-pattern
const Profile = ({}) => {
  const [selectedSocial, setSelectedSocial] = useState('')

  const copyToClipboard = (connectAt: string) => {
    navigator.clipboard.writeText(connectAt) // copy text in button

    setSelectedSocial(connectAt) // set copied social
    setTimeout(() => {
      setSelectedSocial('') // hide copied text after 2 secs
    }, 2000)
  }
  return (
    <div className='profile'>
      <section>
        {/* Introduction */}
        <div className='intro'>
          <Image
            src='/assets/img/profile.png'
            alt='profile'
            width={130}
            height={130}
            objectFit='cover'
            loading='lazy'
          />
          <div className='name'>
            <span>Kidela Jane Gonzales</span> <br />
            Frontend Software Engineer
          </div>
        </div>
        <div className='message'>
          <div>
            {`Greetings! You can call me Kid. I thrive on turning ideas into
        interactive and engaging applications. With a keen eye for detail and a
        love for clean code, I am dedicated to delivering top-notch solutions
        that bring value to users. With over 3 years of hands-on experience,
        I've had the opportunity to learn and grow through various projects.`}
          </div>
          <Image
            src='/assets/img/coder.png'
            alt='linear-art'
            width={150}
            height={150}
          />
        </div>
      </section>

      <hr className='divider' />

      <section>
        {/* Expertise and Education */}
        <div className='expertise-education'>
          <div className='title'>EXPERTISE</div>
          <div>
            React Native | React JS | Next JS | JavaScript/TypeScript |
            Integration Specialist | Tailwind CSS Enthusiast
          </div>
          <div className='title'>EDUCATION</div>
          <div>Bachelor of Science in Information Technology</div>
          <div className='text-[#8D6262]'>
            PHINMA - University of Pangasinan | Major in Programming |
            Graduated: 2019
          </div>
        </div>
      </section>

      <hr className='divider' />

      <section>
        {/* Social Media's */}
        <div className='social'>
          <div className='title'>
            <Image
              src='/assets/img/coffee.png'
              alt='coffee'
              width={50}
              height={550}
            />
            <div>{`Let's Connect!`}</div>
          </div>

          <div className='button-container'>
            {socialList?.map((s) => (
              <button
                key={s?.platform}
                id={`${s.platform}-btn`}
                type='button'
                onClick={() => copyToClipboard(s.connectAt)}
              >
                <span className='pr-2'>•</span>
                {s.platform} : <span className='lowercase'>{s.connectAt}</span>
                <span
                  className={`${`copied-text `} ${
                    selectedSocial === s.connectAt ? 'copied-text' : 'hidden'
                  }`}
                >
                  copied
                </span>
              </button>
            ))}
          </div>
          <div className='contact-message'>
            {`I'm always open to exciting new opportunities and collaborations. If you're looking for a dedicated 
React JS and React Native Developer, or if you simply want to connect, feel free to reach out to me!`}
          </div>
        </div>
      </section>

      <hr className='divider' />
    </div>
  )
}

export default Profile
