// gitprofile.config.js

const config = {
  github: {
    username: '4wl2d', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['4wl2d'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '4wl2d',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://4wl2d.github.io',
    phone: '',
    email: 'loki.lafeyson.00@list.ru',
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
      company: 'myself',
      position: 'Android Developer',
      from: 'January 2023',
      to: 'May 2023',
      companyLink: 'https://github.com/4wl2d',
    },
    {
      company: 'Proton IT',
      position: 'Android Developer',
      from: 'May 2023',
      to: 'Present',
    },
    {
      company: 'Omegawalls OU',
      position: 'Junior Android Developer',
      from: 'June 2023',
      to: 'July 2023',
    }
  ],
  education: [
    {
      institution: 'Gymnasium 11',
      degree: '9',
      from: '2012',
      to: '2021',
    },
    {
      institution: 'KAIT20',
      degree: '2',
      from: '2021',
      to: '2025',
    },
  ],
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],
    
    // Custom theme
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
};

export default config;
