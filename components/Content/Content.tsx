import { ContentProps } from '@/types/components/_global'
import Image from 'next/image'

const sample = [
  {
    name: 'Sample 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 2 Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  }
]
// eslint-disable-next-line no-empty-pattern
const Content = ({ children }: ContentProps) => (
  <div className='content'>
    <div>{children}</div>

    {/* PROJECTS */}
    <div className='projects-container'>
      {/* List */}
      <div className='projects'>
        <h1>Projects</h1>
        <div className='list'>
          {sample?.map(({ name }) => (
            <div key={name} className='name'>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Image */}
      <div className='image'>
        <Image
          src='/assets/img/linear-art.png'
          alt='linear-art'
          width={220}
          height={220}
        />
      </div>
    </div>
  </div>
)

export default Content
