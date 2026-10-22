// Content sourced from Resources/Jmar_Pineda_Resume.tex. Edit here to update the site.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const site = {
  name: 'Jmar L. Pineda',
  fullName: 'Jmar Laxamana Pineda', // used in the hero heading only
  title: 'Electrical and Computer Engineer',
  description:
    'Portfolio of Jmar L. Pineda, an Electrical and Computer Engineering student at NYIT building low-level software, robotics, and open-source tools.',
  tagline:
    'ECE student at NYIT with hands-on experience in embedded systems, low-level programming, and open-source performance work, leading teams that ship.',
  location: 'New York, NY',
  email: 'jmarlpineda21@gmail.com',
  phone: '+1 (347) 445-2415',
  photo: base + '/profile.png',
  resume: base + '/resume.pdf',
  links: {
    github: 'https://github.com/Galm007',
    linkedin: 'https://www.linkedin.com/in/jmar-pineda',
  },
};

export const about = [
  'I am a sophomore studying Electrical and Computer Engineering at NYIT, with experience in hardware and software development alongside undergraduate research.',
  'I lead the NYIT IEEE Micromouse team, teach programming to kids aged 9 to 16, and ship low-level projects in C, C++, Rust, and Python. I like leading teams, mentoring students, and getting things to run fast.',
];

export const skills = [
  {
    group: 'Languages & Tools',
    items: ['C', 'C++', 'C#', 'Java', 'Python', 'Lua', 'JavaScript', 'Rust', 'HTML', 'CSS', 'SQL', 'Arduino', 'React', 'MQL4', 'Git', 'Docker', 'Linux', 'Shell', 'Excel'],
  },
  {
    group: 'Areas',
    items: ['Embedded systems', 'Robotics', 'Game development', 'AI implementations', 'Trading algorithms', 'Web development'],
  },
  {
    group: 'Soft skills',
    items: ['Communication', 'Leadership', 'Teamwork', 'Project management'],
  },
  {
    group: 'Spoken languages',
    items: ['English (native)', 'Filipino (native)', 'Spanish (limited)'],
  },
];

// Grouped by organization (most recent first), with roles listed newest first, like LinkedIn.
export const experience = [
  {
    company: 'NYIT IEEE',
    location: 'New York, NY',
    period: 'Nov 2025 – Present',
    roles: [
      {
        title: 'Treasurer',
        period: 'Apr 2026 – Present',
        points: ['Manage the chapter’s finances, budgeting, and forecasting.'],
      },
      {
        title: 'IEEE Micromouse Project Leader',
        period: 'Nov 2025 – Present',
        points: [
          'Lead and delegate tasks for a team of 5 to source materials, build the micromouse prototype and its software, create physical test cases, and iterate through rapid prototyping.',
          'Team is far ahead of all other NYIT teams, driven by clear task ownership and collaboration.',
        ],
      },
    ],
  },
  {
    company: 'theCoderSchool',
    location: 'Syosset, NY',
    period: 'Jan 2026 – Present',
    roles: [
      {
        title: 'Code Coach',
        period: 'Jan 2026 – Present',
        points: [
          'Teach students aged 9–16 to make their first computer games, building a solid foundation in programming.',
          'Track the progress of 20+ students and design individualized lessons in Unity, Godot, Scratch, Roblox Studio, Arduino, Python, web development, VEX Robotics, Blender, and 3D printing.',
        ],
      },
    ],
  },
  {
    company: 'NYIT Campus Activities Board',
    location: 'New York, NY',
    period: 'Nov 2025 – Present',
    roles: [
      {
        title: 'Campus Events Coordinator',
        period: 'Nov 2025 – Present',
        points: ['Planned, hosted, and budgeted multiple campus-wide events in collaboration with faculty, clubs, and vendors.'],
      },
    ],
  },
  {
    company: 'Penrose & math.js',
    location: 'Remote',
    period: '2024 – 2026',
    roles: [
      {
        title: 'Open-Source Contributor',
        period: '2024 – 2026',
        points: [
          'Penrose (TypeScript, 4 merged PRs): eliminated editor memory leaks, taking ~46,000 leaked listeners per compile down to 0, and wrote a benchmark script to profile leaks.',
          'Penrose: reused a single MathJax pipeline across compiles, cutting leaked heap by ~85% and leaked DOM nodes by ~80%; fixed an editor race condition on rapid recompiles.',
          'math.js (JavaScript): sped up matrix map() and forEach() by over 300%, benefiting many of the library’s other algorithms.',
        ],
      },
    ],
  },
  {
    company: 'QHSS Hack Club',
    location: 'Jamaica, NY',
    period: 'Sep 2021 – Jun 2025',
    roles: [
      {
        title: 'Hackathon Leader',
        period: 'Sep 2021 – Jun 2025',
        points: ['Led my team to 1st place in the school-hosted Hackathon by delegating tasks and tackling the hardest problems.'],
      },
      {
        title: 'Peer Programming Tutor',
        period: 'Sep 2021 – Jun 2025',
        points: ['Taught classmates to make games and websites, set appropriate challenges, and helped them through problems.'],
      },
    ],
  },
  {
    company: 'Members Church of God International',
    location: 'New York, NY',
    period: 'Mar 2017 – Present',
    roles: [
      {
        title: 'Guest Coordinator',
        period: 'Apr 2025 – Present',
        points: ['Coordinate with other guest coordinators to run events on schedule, welcome guests, maintain order, and serve food.'],
      },
      {
        title: 'Volunteer',
        period: 'Mar 2017 – Present',
        points: ['Volunteer at community service events including blood drives, food drives, clean-ups, fundraisers, and free grocery stores.'],
      },
    ],
  },
];

export const projects = [
  {
    title: 'Triangle Slapper',
    summary:
      'Multi-threaded genetic algorithm that recreates an image from layered triangles: it spawns random triangles, scores and selects the best, and breeds the next generation.',
    metrics: ['Multi-threaded', 'Genetic algorithm'],
    tags: ['C'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/Galm007/triangle_slapper' }],
    images: [{ src: base + '/projects/triangle-slapper.jpg', alt: 'Triangle Slapper output: an anime illustration recreated from layered, colored triangles' }],
  },
  {
    title: 'Flappy Bird Neural Network',
    summary:
      'Neural network that learns to play Flappy Bird through a genetic algorithm, built on my own Raylib game.',
    metrics: ['Neuroevolution', 'Raylib'],
    tags: ['C'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/Galm007/flappy_bird_AI' }],
    images: [{ src: base + '/projects/flappy-bird.jpg', alt: 'Flappy Bird clone where a neural network controls the birds between pipes' }],
  },
  {
    title: 'Forex Data Preprocessor',
    summary:
      'Computes common forex indicators from historical price and volume data, normalizes them, and packs them into a format ready for AI model training.',
    metrics: ['Indicators', 'Normalization'],
    tags: ['Python'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/Galm007/forex-data-preprocesor' }],
    images: [],
  },
  {
    title: 'Metaballs Visualization',
    summary:
      'Marching-squares metaballs implemented with macroquad (Rust) and MonoGame (C#), based on Jamie Wong’s article.',
    metrics: ['Marching squares', '2 implementations'],
    tags: ['Rust', 'C#', 'macroquad', 'MonoGame'],
    links: [
      { label: 'macroquad (Rust)', href: 'https://github.com/Galm007/metaballs_macroquad' },
      { label: 'MonoGame (C#)', href: 'https://github.com/Galm007/MetaBalls' },
    ],
    images: [
      { src: base + '/projects/metaballs-macroquad.jpg', alt: 'Metaballs rendered with marching squares in Rust, with the underlying circles drawn in red' },
      { src: base + '/projects/metaballs-monogame.jpg', alt: 'Metaballs rendered with marching squares in MonoGame' },
    ],
  },
  {
    title: 'Automated Forex Trading Algorithms',
    summary:
      'Series of trading algorithms for MetaTrader 4, with the most recent being the best performing.',
    metrics: ['MetaTrader 4', 'Expert Advisors'],
    tags: ['MQL4'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/Galm007/MT4-Expert-Advisors' }],
    images: [],
  },
];

export const education = [
  {
    title: 'New York Institute of Technology',
    place: 'Electrical and Computer Engineering',
    detail: 'Sep 2025 – Dec 2029 (expected) · GPA 3.7',
  },
  {
    title: 'Queens High School for the Sciences',
    place: 'High School Diploma',
    detail: 'Sep 2021 – Jun 2025 · GPA 95.0',
  },
];
