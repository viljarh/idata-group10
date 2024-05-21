### Rental Roulette Group 10

<h1 align="center">RentalRoulette.com</h1>

</br>

### Table of Contents

-    [School Project](#school-project)
-    [Project description](#project-description)
-    [Project Pictures](#project-pictures)
-    [Group Members](#group-members)
-    [Access the website](#access-the-website)
-    [Start localhost](#how-to-start-on-localhost)
-    [Reference, Libary and Components](#reference-libary-and-components)

### School Project

<dd>This website is a result of a university group project, performed in the course IDATA2301 - Web Technologies and IDATA2306 - Application Development, at NTNU. 
</dd>
<dd>All the information provided here is a result of imagination. Any resemblance with real companies or products is a coincidence.</dd>

---

### Project description

<dd>
This project is about learning the fundamentals about how to make a fullstack website from scratch. We have worked through different frameworks  
</dd>

</br>

<dd>
Through this project we have used difference resources to path the way. 
Frontend we have used Next.js, and here we have used Javascript and typescript. To design the components, we have used tailwind to adjust to our desire and fit the theme.

</br>
Backend we have used Node.js, and here we have used Javascript and typescript. To connect to the database we have used PostgresSQL. We also used Prisma ORM to help us to make the database, and make it simpler to imput new tables and values.

</dd>

</br>

---

### Project pictures

<details>
    <summary> <i> Show pictures from website </i> </summary>

<img src="https://cdn.discordapp.com/attachments/1067009221083795458/1242534974796599377/Skjermbilde_2024-05-21_kl._19.49.45.png?ex=664e305f&is=664cdedf&hm=e83ef16336fdacbfc38e91ed6903fa2561cdab11e70e3b72e6e299e9913511dd&" alt="Picture of the frontpage"  width="500"/>

</details>

</br>

<details>
    <summary> <i> Show pictures from vehicle page </i> </summary>

<img src="https://cdn.discordapp.com/attachments/1067009221083795458/1242535102416687164/Skjermbilde_2024-05-21_kl._19.50.49.png?ex=664e307d&is=664cdefd&hm=bf668affaa75ff2844e1fac9d8d06860807bb645c4c68c52d9561a0fb6ce0a7d&" alt="Picture of the vehicle page" width="500"/>

</details>

</br>

---

### Group members:

-    Viljar Hoem-Olsen </br>
-    Thomas Åkre

</br>

---

### Access the website:

-    ##### Can open on <u>[rentalroulette.com](https://rentalroulette.com/) </u>, if you dont want to install the project on your own computer.

---

### How to start on localhost:

-    ##### Needed Requirements to run locally :
     -    ###### Install Node js to run the commands, and we're using postgresSQL.
     -    ###### Create .env file in main root, and input your sql connection.

#### Backend

<details>
    <summary> <i> Show details for starting backend </i> </summary>

1. Change directory:
  <pre> cd backend </pre>

2. Install the modules:
  <pre>npm install</pre>

3. Generate the database
  <pre> npx prisma generate</pre>

4. Migrate the database
  <pre> npx prisma migrate dev</pre>

5. Seed Prisma DB
  <pre> npx prisma db seed</pre>

6. Start the backend
  <pre> npm start </pre>

</details>

</br>

#### Frontend

<details>
    <summary> <i> Show details for instructions </i> </summary>

1. Change directory:
  <pre> cd frontend </pre>

2. Install the modules:
  <pre>npm install</pre>

3. Start the frontend
  <pre> npm run dev</pre>

</details>

</br>

---

### Reference, Libary and Components

-    [Next.js](https://nextjs.org/) <a href="https://nextjs.org/">
     <img src="https://nextjs.org/static/favicon/favicon-32x32.png" alt="Next.js" width="20" height="20">
     </a> </br>
-    [NestJS](https://nestjs.com/) <a href="https://nestjs.com/">
     <img src="https://docs.nestjs.com/assets/logo-small.svg" alt="NestJS" width="20" height="20">
     </a></br>

-    [Node.js](https://nodejs.org/en)<a href="https://nodejs.org/en">
     <img src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp" alt="NodeJS" width="20" height="20">
     </a></br>

-    [ChatGPT](https://chatgpt.com/)<a href="https://chatgpt.com/">
     <img src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" alt="ChatGPT" width="20" height="20">
     </a></br>

-    [PostgresSQL](https://www.postgresql.org/)<a href="https://www.postgresql.org/">
     <img src="https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png" alt="PostgresSQL" width="20" height="20">
     </a></br>

-    [Shadcn UI](https://ui.shadcn.com/)<a href="https://ui.shadcn.com/">
     <img src="https://seeklogo.com/images/S/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png?v=638421451470000000" alt="ShadCn UI" width="20" height="20">
     </a></br>

-    [Lucide](https://lucide.dev/) <a href="https://lucide.dev/">
     <img src="https://avatars.githubusercontent.com/u/66879934?v=4" alt="Lucide" width="20" height="20">
     </a></br>

-    [Prisma](https://www.prisma.io/)<a href="https://www.prisma.io/">
     <img src="https://static-00.iconduck.com/assets.00/file-type-prisma-icon-1682x2048-yybmypz0.png" alt="Prisma ORM" width="20" height="20">
     </a></br>
