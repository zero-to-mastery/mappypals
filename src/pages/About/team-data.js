const role = [
    'Frontend',
    'Backend',
    'Fullstack',
    'DevOps',
    'Team Lead',
    'UI/UX',
    'Project Mgr.',
    'Marketing',
    'Product'
];

const location = [
    'Nigeria',
    'UK',
    'US',
    'Australia',
    'Russia',
    'Lithuania',
    'India',
    'Moroco'
];

const team = [
    {
        avatar: null,
        name: 'Mubarak Show',
        role: `${role[4] + ', ' + role[8]}`,
        location: location[0],
        isEmployed: false,
        portfolio: 'https://www.google.com/',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Marco Sciortino',
        role: role[2],
        location: location[1],
        isEmployed: false,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Arnas Dičkus',
        role: role[6],
        location: location[5],
        isEmployed: false,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Yash Puthran',
        role: role[1],
        location: location[6],
        isEmployed: true,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Thijs Nijhof',
        role: `${role[5]}, ${role[0]}`,
        location: location[1],
        isEmployed: false,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Kristina',
        role: role[2],
        location: location[1],
        isEmployed: false,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Melissendra',
        role: role[0],
        location: location[1],
        isEmployed: false,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Matt Smith',
        role: role[3],
        location: location[1],
        isEmployed: false,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        avatar: null,
        name: 'Yassine Belkaid',
        role: role[1],
        location: location[7],
        isEmployed: false,
        portfolio: 'https://www.google.com//',
        linkedin: 'https://www.linkedin.com//'
    }
];

export default team;
