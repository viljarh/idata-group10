# Sprints reports for IDATA2301 & IDATA2306

---

## Table of Contents

- [Sprint 1](#sprint-1)
- [Sprint 2](#sprint-2)
- [Sprint 3](#sprint-3)
- [Sprint 4](#sprint-4)
- [Sprint 5](#sprint-5)

---

## Info

<dd>

We changed the format on the sprint reports from 1-3, but has not changed any of the given information at the given time.

We have been trying to keep the sprints for the same amount of times at the first sprints, where they are almost for 4 weeks each sprint. 

</dd>

---

<details>
<summary> <i> Sprint 1 </i></summary>

## Sprint 1

Get familiar with the project. Understand the requirements and learn the technologies that we are using.

We have created wireframes, use-case diagram and database schema. We started working on the front-end with some skeleton code in Next.js, which is the framework we are going to use.

---

</details>

<details>
<summary> <i> Sprint 2 - Mandag 29. januar - Torsdag 22. Februar </i></summary>

## Sprint 2

Sprint details :
Mandag 29. januar - Torsdag 22. Februar
Goals:
wireframe of the pages,
HTML skeleton of the project,
database sketch,
use-case diagram.

Tasks:
Make wireframes for the project : Viljar , Thomas
Basic html skeleton of the project, started with typescript and react website, and used a little html: Viljar
database sketch, basic structure of the database (tables) : Thomas
Use case diagrams : Thomas

Feedback :
Wireframes need to be continued on, was good work from both sides but some things were not finished. Need to chose a color pallette. Make some changed about nav bar and the login pages.
Website was good, still just the basic, but was a good start.
database sketch, got some good feedback about what we could change, and make us understand better how it should look like.
Use case diagram was just a simple start, but needed to make it more complex and use arrows for what the different types of users could do.

    We had different task since we are two person group, but we are working at the school, but we try to help each other and talk about each other task to get each others opinions. This to ensure that we agree on what and how we should do the project.

---

</details>

<details>
<summary> <i> Sprint 3 - Mandag 26. Februar - Torsdag 21. Mars</i></summary>

## Sprint 3

Sprint details :
Mandag 26. Februar - Torsdag 21. Mars
Goals:
Static site with design in place; sketch of responsive site versions

Tasks:
Continued working on the feedback from checkpoint 2.
Worked more on the wireframes to change it after the feedback. : Thomas
Need to make mobile sketches.
Database needed to changed the one to many connections, and change some tables to make it simpler at start. Remove user or customer table : Thomas
Start making the static site, continued from the html sketches and make it more responsive with typescript etc. : Viljar

    Viljar had more controll over the coding part on this checkpoint, while Thomas had more to fix the changes from the feedback on checkpoint 2.

Done :
Database is close to done with how it should look, we scaled it down, and have sketches for an more advanced database if we need it for future.
Wireframes is good, just some small adjustment needed, and correcting the color after colorpallette.

Next step:
Continue working on backend and frontend. Implement the backend so we can retrieve information to the frontend. Finish the backend before working too much on the frontend, just so we could connect they to eachother.

    Just continue to help eachother, and work together. Both is working on the frontned and backend, wokring together on the school, through liveshare(vscode extension). Try to solve the problems on each other computers before analysing eachother work.

---

</details>

<br>

---

<details>
<summary> <i> Sprint 4 - Mandag 25. Mars - Fredag 26. April. </i></summary>

## Sprint 4

Sprint details:
Mandag 25. Mars - Fredag 26. April.

Goals:

    Fetching and visualize vehicles on the frontend.
    Make it more responsive and implement functions.
    Code Quality

Tasks:

    Start fetching vehicles from backend. - Viljar
    Implementing the backend. - Thomas
    Creating REST API - Viljar & Thomas
    Creating Swagger - documentation - Thomas
    Updating the frontend visual. - Viljar & Thomas

Done:

    Created the REST API.
    Sent vehicles from database to the backend localhost, could edit and add new vehicles through localhost:8080/api.
    Fetched vehicles from the database.
    Tested fetch with postman tests. Got the desired output, but had to change the update methode. Just starting to experiment since we saw it was a requirement to deliver in.

    We had problems fetching from database and sending it to the frontend. Not so much problem sending as a json file to the localhost:8080, but more difficult to fetch it on the frontend.
    Tried to implement backend and fetch on fronend on each own branch, and use the one whos working. Troubles showing images.
    Swagger went good, no problems for implementing.

    We both tried making the backend implemention on our own branch ,so we could both understand and learn the backend part
    , even though it would take more time, we thought it was important so both can understand for later use.

Next step:

    Create the admin site, and admin functions.
    Start displaying and make it a more operateable website.
    Creating users and login.
    Continue trying to show images.
    Add favourite

---

</details>

<details>
<summary> <i> Sprint 5 - Mandag 29. April - Torsdag 23. Mai. </i></summary>

## Sprint 5

Sprint details:
Mandag 29. April - Torsdag 23. Mai.

Goals:
Implement the admin page.
Create / Edit a vehicle
Hide Vehicle from admin
Make a login page, and implement login
Start visualize the different vehicles.
Add Filter to search after vehicles.
Showcase images of vehicles
Add items to cart and checkout.
Add Favourites.
Make a order page.
Make it more appealing for the user.
Make it possible to rent for a period of time.

    Check all requirements
        - Sprint
        - Video
        - Documentation

Publish the project to the website.

##### Finalize the project

Tasks:

- Implement the admin page. -Viljar
  make a add vehicle function.
  make a edit vehicle function.
  make a hide vehicle function.
  See the users.
  See the orders and the amount been rented.

- Implement the cart and order. - Viljar & Thomas
  When press rent, it goes to the cart, and from the cart button you can checkout without using a card for school project reasons.

- Implement Favourite. -Viljar

- Signin /signout
  Possible to sign in and create a user. - Viljar
  These also become visiable in the admin table. - Viljar

  Create / Edit a vehicle from admin page. Viljar & Thomas
  Make a login page, and implement login - Viljar
  Display vehicles. Thomas
  Display images. Thomas

  Added footer - Thomas
  Added a search bar with filtering. - Thomas

- Non coding requirements - Thomas
  Look over the sprint - Thomas
  Manuscript for video - Thomas
  Make a videopresentation - Viljar & Thomas

Done:

    We uploaded the frontend to the next/vercel servers, and the backend thorugh the open-stack server given to us by the school.  so we could connect them to eachother. We forwarded the webpage through the domain for the semester rentalroulette.com.
    Here we also had the possibility to have it secured with https.
    To access the api, we changed the settings on our domain to have the api.rentalroulette.com, where we could see the swagger documentation.
    Made some small adjustments to the frontend to vizualise the vehicles better and looks more clean.

    The admin page we made we added so the admin with the admin permissions can see the orders, users without having access to password, and can see the vehicles.
     Here you can delete, edit and hide vehicles.
    The adminpage has a restricted permission only the user with admin priviliges has the possibility to access it.
    The button to the admin page is available when you login as admin, and cannot be accessed through writing /admin in the url bar.

    Problem with adding pictures to the vehicles, not sure if we're going to have it on the backend or frontend, so we delaying that problem, and continue on the website to implement other functions. We figured it out for the localhost, and encounter some new problem when we uploaded it to the servers. Some vehicles got the images, and someone didnt, but in the end we figured it out. 

    We had some problem implementing to add a favorite to the user, but we forgot to add a module to the backend files, and so we got frustrated it didnt work, so we skipped it for some time, and tried again later, and then we got it working. 

    We implemented a extra feature "Try your luck", where you can press a button, that give you a random car you can add to cart, this was because since the name was Rental Roulette, we could add a function that viewer might seem fun. 

    We have tried to assign the right person to each task, but in the end we have sat together while working through the whole project. 

    The website is up and running at rentalroulette.com.



</details>
