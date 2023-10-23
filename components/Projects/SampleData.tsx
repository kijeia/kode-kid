export interface ProjectSchema {
  name: string
  description: string
  links: Array<{ label: string; link: string }>
  keyTechnologies?: Array<string>
}

const SampleProjects: ProjectSchema[] = [
  {
    name: 'Betterteem Web-App',
    description:
      'Betterteem AI® enables organizations to predict and mitigate unwanted employee resignations.',
    links: [
      { label: 'View Web App', link: 'https://go.betterteem.com/auth/login' },
      { label: 'View Site', link: 'https://www.betterteem.com' }
    ],
    keyTechnologies: [
      'React JS',
      'TypeScript',
      'Tailwind CSS',
      'Ant Design (Antd)',
      'Storybook',
      'Redux',
      'Zustand',
      'Tiptap Integration',
      'i18n Translation',
      'Weglot Translation',
      'Stripe Integration'
    ]
  },
  {
    name: 'Betterteem Mobile-App',
    description:
      'Betterteem AI® enables organizations to predict and mitigate unwanted employee resignations.',
    links: [
      {
        label: 'IOS',
        link: 'https://apps.apple.com/ph/app/betterteem-play/id6447600533'
      },
      {
        label: 'Android',
        link: 'https://apkcombo.com/betterteem-play/com.betterteem.mobile/'
      }
    ],
    keyTechnologies: [
      'React Native',
      'TypeScript',
      'Tailwind CSS',
      'i18n Translation',
      'Zustand',
      'CLI'
    ]
  },
  {
    name: 'Taxikel',
    description: 'Get deliveries and run errands from your device.',
    links: [{ label: 'View Site', link: 'https://www.taxikel.com' }],
    keyTechnologies: ['React JS', 'JavaScript', 'CSS', 'Redux']
  },
  {
    name: 'NALA - Neurodermitis App',
    description:
      'NALA has been developed by a dedicated team, including experts in dermatology, psychology, integrative medicine, sleep, and nutrition, all with a deep understanding of eczema.',
    links: [
      { label: 'View Site', link: 'https://nala.care/en/' },
      {
        label: 'View Mobile App',
        link: 'https://apps.apple.com/ph/app/eczema-app-nala/id1545319742'
      }
    ],
    keyTechnologies: ['React Native', 'JavaScript', 'CSS', 'i18n Translation']
  },
  {
    name: 'Edusuite Mobile-App',
    description:
      'Edusuite’s AI-driven technology analyzes data and resources, enabling school administrators, faculty, and students to enhance resource allocation and make informed decisions.',
    links: [{ label: 'View Site', link: 'https://www.edusuite.asia' }],
    keyTechnologies: ['React Native', 'CSS', 'JavaScript', 'Redux']
  }
]

export default SampleProjects
