# MAPPYPALS :earth_africa:

**An app that keeps track of your friends by putting them on a map**

MappyPals is a collaboration project managed by a small group of dedicated fellow students. Building an application to provide users a platform to keep track of which countries their friends and family are in, to make meeting up an easier task.

MappyPals is being built upon the MERN stack, with the intention of releasing and maintaining the project in the real world based upon user suggestions and feedback. Therefore providing an awesome opportunity not only the ability to expand on and learn new skills, but also a project you can include on your resume and show off to friends, family and potential employers.

### Useful Links

-   [Backend Repo](https://github.com/zero-to-mastery/mappypals_backend)
-   [Design Mock Ups](https://xd.adobe.com/spec/d0f02fb5-5fa5-4aff-63e8-d8d329d90a0d-a6c1/)
-   [Contributing Guide](https://github.com/zero-to-mastery/mappypals/blob/master/CONTRIBUTING.md)
-   [PR/Github Guide](https://github.com/zero-to-mastery/mappypals/blob/master/pr-guide.pdf)
-   [Dev Readme](https://github.com/zero-to-mastery/mappypals/blob/master/DEV_README.md)

# Preface

-   **Background**: I’d like to travel to different countries but i’m unable to remember all the friends I have in those countries.
-   **Problem Context**: It is difficult to remember all the friends you have across the globe and that could slow down your travel plan.
-   **Solution**: A web app that’ll allow you to add your friend and their detail, which will be displayed on the map. This would help in locating your friends in a specific country in which reaching out to them to host you would be much easier.

# Product Specs

## Functionalities

### Version 1.0

-   User Authentication (Login/Register)
-   CRUD Friends
-   Display friends on a map based on their { country: ‘Azerbaijan’ };
-   Click on friend icon to view more details.

### Version 2.0

-   Send out emails to added friends to join the platform
-   Friends can update their profile which should reflect across the entire app
-   Auto update friends new location (permission) which should reflect across the app
-   See your friend’s friends (mutual friends)

## Tools

-   **Frontend**: React, CSS3
-   **Backend**: Node/MongoDB with mongoose
-   **Map Api**: MapBox/Google Maps

## Overview

Our mission is to make it easier for people (travelers, students) to connect with like-minded people abroad.

## Objectives

-   To make travelling easier by connecting travellers to the people they know in a particuliar city.
-   To connects travellers with similar interest (interest feature).
-   To help build travelling ituneraries.

## Success Metrics

-   Have 500 signuos within the first week of our launch.
-   Get 1000 pinned pals within the first week of our launch.
-   Have 500 invites sign ups within the first week of our launch.

## Messaging

-   None yet

## Timeline/Release Plan

## Release & Launch

-   [**ProductHunt**](https://www.producthunt.com/)
-   [**ZTM Discord**](https://zerotomastery.io/)
-   [**Grind Reel Discord**](https://discordapp.com/invite/rka6rvg)
-   [**Maker's Kitchen Slack**](https://makerskitchen.xyz/)
-   [**LinkedIn**](https://www.linkedin.com/)
-   [**Beta List**](https://betalist.com/)
-   [**Hacker News**](https://news.ycombinator.com/)

## Personas

**Persona X (Int’l Student)**
Name: Lorem Ipsum
Age: 22
Nationality: Nigerian
Profession: Student (Int’l student)
Study Location: Malaysia (abroad)
Employed: No

**Persona Y (Digital Nomad)**
Name: John Doe
Age: 28
Nationality: American
Profession: Web Developer
Location: Bali, Indonesia
Employed: Yes

**Persona Z (Volunteer)**
Name: Sally
Age: 26
Nationality: American
Profession: Volunteerer  
Location: Bali, Indonesia
Employed: Yes

## User Scenarios

### User Sign Up/ Login

-   **User A** is a student who stumbled upon MappyPals while reading through a travel blog about the best apps for meeting travellers, he think it’ll be a useful app for him to plan his next travel so he sings up to enjoy the full features MappyPals has to offer.
-   **User B** is a Digital Nomad who found out about MappyPals through our launch on ProductHunt, he thought it was an interesting app so as a tech junkie, he quickly signed up to test the app by adding some friends. Few months after, he’s about to travel to Germany where few of his friends are, he quickly loads the app and logs in to contact his friends in Germany.

### Map Functionalities

#### Browser Permission

-   Upon logging in for the first time, the browser prompts a user to grant MappyPals the permission to use their location
    -   If YES, the map loads the user's current location
    -   If No, the map loads its default location (San Francisco)

#### Map interaction

-   **User A** is able interact with the Map by dragging it around and zooming in on a specific location.

#### Pin Friend to Map

-   When a user clicks/taps on the map, they a prompted with a form to add their friends details.
-   When they click save, the friend is pinned to the point that specifically clicked on the map
-   When a user hovers on a pinned friend, a Pop up emerges showing that specific person’s details
-   When a user clicks on a pinned friend, they are directed to the friends profile where they’ll be able so see more details and possible drop them a message

#### Friend Invitation Flow

flow chart to copy/paste when push made

### User Changes Location

-   **user A** moved from England to Ireland, so when he launches MappyPals, the application detects his current location and automatically updates it in database. All his pinned friends then gets a notification about the User A’s change of location and when his friend check their map, he’s no longer pinned on England, he’s now automatically pinned on Ireland. \***User A**'s friends in Ireland and people with the same interests as him that live in Ireland then gets notified that he’s in the country.

### Search / Filter

-   **User B** has now arrived safely in Germany so when he launches MappyPals, the current map position is Germany, but he then remembered that he has a friend in Brazil which he’d like to add to the map. He’s doesn’t want to go through the hassle of finding Brazil by dragging the map around endlessly, so he quickly searches for Brazil on the search bar which then repositioned the Map to Brazil. He’s now able to quickly add his friends whenever he remembers their location. Brazil might be User B’s next destination, who knows?

### User Adds Travel Plan

-   Will be add later

## User Stories / Features /Requirements

Here are the full lists of feature we plan to implement throughout the lifespan of this product. It is important to know that the features might (and will) change based on the user feedbacks we get post-launch. Till then, these are some features we should keep in mind when building this application.

-   **P0**: The Minimum Viable Product (MVP) - these are the features we’re currently focused on building. Every other feature in P1 and P2 may or may not be build depending on the user feedback after launching.
-   **P1**: Medium priority
-   **P2**: Low priority

### P0

-   Landing page
-   Contact page
-   About us page
-   Login/Register/Reset Password
-   User Dashboard
    -   Edit details
    -   Settings
-   Pin friends to map
    -   Add friends manually
    -   Import from other social media platforms (future)
-   Friend Invitation
    -   Send out invitation emails to added friends who have not yet joined MappyPals
-   Search / Filter
    -   Filter by country
    -   Filter by interests

### P1

-   Interests (future)
    -   Add your interests to your profil
    -   See people with similar interests
-   Mutual Friends
    -   Show a connecting line between mutual friends
-   In-App Messaging (future)
    -   Contact friends directly within the app
-   Places of attraction suggestion based on current location

### P2

-   Add Travel itineraries (future)
    -   User should be able to add their travel plans and locations
-   In-App Notifications (future)
    -   Friends or locals in your travel destinations should be notified when you’ve update your travel plans.
    -   Friends or people with similar interests in particular location gets notified when you’re in their location
-   Travelling light? Cool, but someone else might need to send their friend a package with your unused space. Sell some of your travel space (kgs) to someone in need of it.
