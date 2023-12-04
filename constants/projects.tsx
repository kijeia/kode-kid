export interface ProjectSchema {
  name: string
  description: string
  roles?: Array<string>
  links: Array<{ label: string; link: string }>
  keyTechnologies?: Array<string>
}

export const MajorProjects: ProjectSchema[] = [
  {
    name: 'Go Betterteem',
    description:
      'Betterteem AI® empowers companies to anticipate and proactively address employee attrition. Its capabilities encompass team member engagement check-ins, surveys, feedback, recognition programs, perks, and more, fostering a supportive workplace environment.',
    roles: [
      'Frontend Software Developer',
      'Played a role in enhancing and maintaining the core features and functionalities.',
      'Managed multilingual support by utilizing Weglot and i18n for language translation.',
      'Integration and maintenance of Tiptap for formatting check-ins and feedback.',
      'Stripe integration for payment method and subscription.',
      'Collaborated closely with Backend Developers for API integration.'
    ],
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
      'CLI',
      'Storybook',
      'Tiptap Integration',
      'i18n Translation',
      'Weglot Translation',
      'Stripe Integration'
    ]
  },
  {
    name: 'Betterteem Play App',
    description:
      "Bringing the employee experience into a single mobile application. This app offers a range of features, including daily mood check-ins, acknowledgment of check-ins, survey responses, employee recognition, perk redemptions, and more. Moreover, it's accessible on both Android and iOS platforms.",
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
    roles: [
      'Mobile Developer',
      'Played a role in enhancing and maintaining the core features and functionalities.',
      'Managed multilingual support by utilizing i18n for language translation.',
      'Collaborated closely with Backend Developers for API integration.',
      'Provided support during the deployment process in development mode for both iOS and Android.',
      'Ensure compatibility of components for both iOS and Android platforms.'
    ],
    keyTechnologies: [
      'React Native',
      'TypeScript',
      'Tailwind CSS',
      'i18n Translation',
      'Zustand',
      'CLI'
    ]
  }
  //   {
  //     name: 'Taxikel',
  //     description:
  //       'Get deliveries and run errands from your device. The web app is still in development and in private mode.',
  //     links: [{ label: 'View Site', link: 'https://www.taxikel.com' }],
  //     keyTechnologies: ['React JS', 'JavaScript', 'CSS', 'Redux']
  //   },
  //   {
  //     name: 'NALA - Neurodermitis App',
  //     description:
  //       'NALA has been developed by a dedicated team, including experts in dermatology, psychology, integrative medicine, sleep, and nutrition, all with a deep understanding of eczema.',
  //     links: [
  //       { label: 'View Site', link: 'https://nala.care/en/' },
  //       {
  //         label: 'View Mobile App',
  //         link: 'https://apps.apple.com/ph/app/eczema-app-nala/id1545319742'
  //       }
  //     ],
  //     keyTechnologies: [
  //       'React Native',
  //       'JavaScript',
  //       'CSS',
  //       'Redux',
  //       'i18n Translation'
  //     ]
  //   },
  //   {
  //     name: 'Edusuite App',
  //     description:
  //       'Edusuite’s AI-driven technology analyzes data and resources, enabling school administrators, faculty, and students to enhance resource allocation and make informed decisions.',
  //     links: [{ label: 'View Site', link: 'https://www.edusuite.asia' }],
  //     keyTechnologies: ['React Native', 'CSS', 'JavaScript', 'Redux']
  //   }
]

export const CollaborativeProjects: ProjectSchema[] = [
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
    roles: [
      'Mobile Developer',
      'Contributed to troubleshooting and fixing various components.',
      'Implemented and customized a progress chart or pie chart.',
      'Incorporated manual translation using i18n.'
    ],
    keyTechnologies: [
      'React Native',
      'JavaScript',
      'CSS',
      'Redux',
      'i18n Translation'
    ]
  },
  {
    name: 'Edusuite App',
    description:
      'Edusuite’s AI-driven technology analyzes data and resources, enabling school administrators, faculty, and students to enhance resource allocation and make informed decisions.',
    links: [{ label: 'View Site', link: 'https://www.edusuite.asia' }],
    roles: [
      'Mobile Developer',
      'Developed and enhanced components to improve functionality and user experience.',
      'Conducted API integration to streamline data exchange and enhance overall system capabilities.'
    ],
    keyTechnologies: ['React Native', 'CSS', 'JavaScript', 'Redux']
  }
]

export const PersonalProjects: ProjectSchema[] = []
