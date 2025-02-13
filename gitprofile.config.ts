// gitprofile.config.ts

const CONFIG = {
  github: {
    username: '4wl2d', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of 4wl2d',
    description: 'Nice to see you here!',
    imageURL: 'https://ibb.co/vCpfnRyP',
  },
  social: {
    linkedin: '4wl2d',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '4wl2d',
    dev: '4wl2d',
    stackoverflow: '24640072/4wl2d', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'truejke',
    website: '',
    phone: '',
    email: 'arifulalamszn@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kotlin',
    'Java',
    'Android SDK',
    'Retrofit',
    'Ktor',
    'Koin',
    'Coil',
    'CIO',
    'OkHTTP',
    'Firebase',
    'Coroutines',
    'Jetpack Compose',
    'RxJava',
    'Git',
    'Gradle',
    'Clean Architecture',
    'MVVM',
    'TDD',
    'SOLID',
    'MySQL',
    'PostgreSQL',
    'Dagger',
    'Hilt'
  ],
  experiences: [
    {
      company: 'Flip',
      position: 'Android Developer',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: 'https://careers.flip.shop/',
    },
    {
      company: 'Ways Studio / Proton IT',
      position: 'Android Developer',
      from: 'July 2023',
      to: 'June 2024',
    },
    {
      company: 'Omegawalls OU',
      position: 'Junior Android Developer',
      from: 'June 2023',
      to: 'July 2023',
    }
  ],
  
  educations: [
    {
      institution: 'Gymnasium 11',
      degree: '9',
      from: '2012',
      to: '2021',
    },
    {
      institution: 'KAIT20',
      degree: '4',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `4wl2d // true`,

  enablePWA: true,
};

export default CONFIG;
