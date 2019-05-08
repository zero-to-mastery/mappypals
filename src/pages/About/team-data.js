const role = [
  'Frontend',
  'Backend',
  'Fullstack',
  'DevOps',
  'Product Manager',
  'UI/UX',
  'Project Manager',
  'Marketing'
]

const location = [
  'Nigeria', 
  'UK',
  'US',
  'Australia',
  'Russia',
  'Lithuania',
]

const team = [
  { avatar: null, name: 'Mubarak Show', role: `${role[4] + ", " + role[0]}`, location: location[0], isEmployed: false, portfolio: "www.google.com/", linkedin: "www.linkedin.com" },
  { avatar: null, name: 'Marco Sciortino', role: role[2], location: location[1], isEmployed: false, portfolio: "www.google.com/", linkedin: "www.linkedin.com" },
  { avatar: null, name: 'Arnas Disckson', role: role[6]  , location: location[5], isEmployed: false, portfolio: "www.google.com/", linkedin: "www.linkedin.com" },
  { avatar: null, name: 'Yash Puthran', role: role[1]  , location: location[5], isEmployed: true },
  { avatar: null, name: 'Thijs Nijhof', role: `${role[5] + ", " + role[0]}`  , location: location[1], isEmployed: false, portfolio: "www.google.com/", linkedin: "www.linkedin.com" },
  { avatar: null, name: 'Kristina', role: role[2], location: location[1], isEmployed: false, portfolio: "www.google.com/", linkedin: "www.linkedin.com" },
  { avatar: null, name: 'Melissendra', role: role[0], location: location[1], isEmployed: false, portfolio: "www.google.com/", linkedin: "www.linkedin.com" },
  { avatar: null, name: 'Matt Smith', role: role[3], location: location[1], isEmployed: false, portfolio: "www.google.com/", linkedin: "www.linkedin.com" },
]

export default team;