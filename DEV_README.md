# Important! 
- **Think in Components** - exmple: a **Button** can be created as a component of its own which can then be reused across the application. Building this way helps with consistency and resuability. 

- **Organize and group things as much as possible**. The bigger our codebase grows, the more likely it is for bugs to occur, but keeping code and features orginzed helps in tracking down defects. 

- **Let others know what you're work on**. You can do that posting in the **#mappypals** discord channel. This will help ensure that different people are not seperately building the same feature/functionality. 

- Use the **#mappypals** Discord channel to discuss and ask questions about the app.

### THINGS NEEDED
* Email domain verificator? => alternative solution: confirmation email
Postcode / Zip verificator? => Google API geocoding
* Login / Signup styling

### Live Questions
Q: login-signup: do we also want Facebook and Google signup-login?
A: Yes, this'll easy the login process for users. 

Q: what do we use for the backend? Firebase? Node? Headless CMS like Strapi or Netlify? please make your suggestions
A: 

### CODE NOTE
* the login page is currently working as if the user was already logged in for us to be able to work with the map.

const Home = (user) => {
	const [point, getPoint]=useState({x: 0, y:.0})
	return(
###     (false)?
		(