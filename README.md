# WeLivv

### `How to start the app`

1. cd backend - npm install (install dependencies) - psql mydb < data.sql (seed the data) - node server (run the server)
2. cd frontend - npm install (install dependencies) - npm start (run the app)

### `Technology Stack`

Database: PostgreSQL
BackEnd/ Server: Node.js and Express
FrontEnd/ Building interface: React.js

### `Development process`

1. Understanding the idea and requirements:

- I always start by reading the requirements. With this process, I try to understand the WHAT and the WHY.

2. Planning:

- I split the application on two main parts (backend and frontend). Then I decided to work on the backend first because it has higher complexity and the frontend functionality is dependend on the backend. While working on the backend I like to keep the frontend requirements and design at the back of my mind and passively think about it. Then when I get to latter part, there is more organization and less ambiguity.

3. Development:

- Backend: Started with importing .csv file into PostgreSQL database. Used Postico (PostgreSQL client) to easily look and modify the data. In the meantime while creating the table and connecting the database I started to build the Express server. I created three different REST API endpoints (listed in routes/business.js) which will query the database and return appropriate results. Since my frontend was not connected yet, I was using Insomnia (REST client) to make sure that my API endpoints are working as expected. Once I was satisfied with the built enpoints and their results I focused and started to work on the frontend.
- Frontend: Prior to start building the frontend I outlined on a piece of paper the whole Component structure (on what route, which Component is going to be render). Also, I made research to get design ideas about how I would like the application to look like (got some ideas from WeLivv website). Once I had an idea and overview of the whole structure and design, started to connect the frontend with the backend (making API calls). I was creating one Component at a time, starting from: Home page, Businesses page (searching for all), Business page (showing one) and at the end Edit page (allowing to edit). Continuously, troughout the development process I was improving the design of the application (using CSS and Bootstrap library).

### `Final thoughts`

I really enjoyed this challenging and interesting project which encouraged me to think logically, use my creative side, as well as build something from the ground up. Everything I do, I do it 100%, and this project has been no different.
