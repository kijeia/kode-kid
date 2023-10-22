export interface ProjectSchema {
  name: string
  description: string
  links: Array<{ label: string; link: string }>
  keyTechnologies?: Array<string>
}

const SampleProjects: ProjectSchema[] = [
  {
    name: 'Sample 1',
    description:
      'Sample 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ],
    keyTechnologies: [
      'React JS',
      'React Native',
      'Tailwind CSS',
      'Ant Design (Antd)',
      'Storybook',
      'Zustand',
      'Tiptap Integration',
      'i18n Translation',
      'Weglot Translation',
      'Stripe Integration'
    ]
  },
  {
    name: 'Sample 2 Lorem',
    description:
      'Sample 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 3',
    description:
      'Sample 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 4',
    description:
      'Sample 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 5',
    description:
      'Sample 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 6',
    description:
      'Sample 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 7',
    description:
      'Sample 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  },
  {
    name: 'Sample 8',
    description:
      'Sample 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ac justo eu efficitur. Nullam facilisis velit ut dapibus cursus. Vivamus varius, ipsum at ultricies cursus, lectus nisl fringilla tellus, vel vehicula augue turpis id dolor. Fusce nec luctus elit. In hac habitasse platea dictumst. Phasellus et justo id est venenatis varius eu eu nisi. Proin vel neque vel dui aliquet bibendum.',
    links: [
      { label: 'View Site', link: '/test.com' },
      { label: 'Github', link: '/test.com' }
    ]
  }
]

export default SampleProjects
