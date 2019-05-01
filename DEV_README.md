# Important! 
- **Think in Components** - exmple: a **Button** can be created as a component of its own which can then be reused across the application. Building this way helps with consistency and resuability. 

- **Organize and group things as much as possible**. The bigger our codebase grows, the more likely it is for bugs to occur, but keeping code and features orginzed helps in tracking down defects. 

- **Let others know what you're work on**. You can do that posting in the **#mappypals** discord channel. This will help ensure that different people are not seperately building the same feature/functionality. 

- Use the **#mappypals** Discord channel to discuss and ask questions about the app.

### THINGS NEEDED
* Email domain verificator? => alternative solution: confirmation email
Postcode / Zip verificator? => Mapbox
* Login / Signup styling

### Live Questions
Q: login-signup: do we also want Facebook and Google signup-login?
A: Yes, this'll easy the login process for users. 

Q: what do we use for the backend? Firebase? Node? Headless CMS like Strapi or Netlify? please make your suggestions
A: 

### CODE ISSUES

I am developing the function to add a new friend into the "DB" (which for now is just an array of objects)

-The function gets all the details from a form (and so far so good)
-It  fills the object "newFriend" with all these data (and that's where I got stuck)
-It pushes this newFriend into the array (when BE will be implemented it will be DB)

now here' the thing... I am using spread operator inside the object to get all the data I previously had (location, postcode and country) and then add that data retrived from the form BUT
it's like the spread operator is overriding everything.
any idea?
```
//these two functions are inside the form component to which I pass the "addFriendData" function as prop called "onFriendLoaded"
//textboxes onchange
const anythingChanges=(event, state, setState)=>{
    setState({data:{...state.data, [event.target.id]: event.target.value}})
}
//double check required fields are filled up 
const checkAndReturn=(state,props)=>{
    if(state.data.nickname!==""){
        props.onFriendLoaded(state)
    }
}
```

and then

```
//here it should set the "newFriend object" to push into the array.
addFriendData=(friendState)=>{
//shorthand to avoid "friendState.data" all the time - I use the ReactHook useState in the previous component rather than actual React.Component
    const {nickname, name, email, phone}=friendState.data
//setState newFriend { spreadOperator to keep the data I do not want to cancel, and then complete with the new data}
    this.setState({newFriend: {...this.state.newFriend, nickname, name, email, phone}})
//this is just a test with console log for now but it will push the friend into the array
    setTimeout(()=>this.addFriendToList(),1000);
  }
```
note: I say it's the spread operator overriding because I've tried taking it off and it works
### CODE NOTE
The login page is currently working as if the user was already logged in for us to be able to work with the map.
To set to the correct status just use "user" instead of "false"

```
const Home = (user) => {
	const [point, getPoint]=useState({x: 0, y:.0})
	return(
     (false)?
		(
```

