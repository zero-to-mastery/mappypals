const role = [
  'Fontend',
  'Backend',
  'Fullstack',
  'DevOps',
  'Product',
  'UI/UX',
  'Project',
  'Marketing'
]

const location = [
  'Nigeria', 
  'UK',
  'US',
  'Australia',
  'India', 
  'Russia',
  'Ghana'
]

const team = [
  { avatar: null, name: 'Mubarak Show', role: `${role[4] + ", " + role[5]}`, location: location[0], isEmployed: false },
  { avatar: null, name: 'Marco Sciortino', role: role[2], location: location[1], isEmployed: false },
  { avatar: null, name: 'Gouravjeet Singh', role: role[2]  , location: location[2], isEmployed: true },
  { avatar: null, name: 'Pavel Isp', role: role[2]  , location: location[5], isEmployed: true }

]

export default team;