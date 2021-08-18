# Per-Diem-Coding-Challenge---Backend

# js_challenge_jagaad_samuel-adewole

Backend coding challenge for PER DIEM

## Tech/framework used

- [Node](https://nodejs.org)

- [Express](https://expressjs.com/)

- [Node-json-db](https://www.npmjs.com/package/node-json-db)

- [Docker](https://www.docker.com/)

## Quick Start

The guildlines below contains the instructions/commands to get started.

To run the backend server
1. Open the root directory of the project on your terminal 
2. Run `npm install` to install all the app dependencies
3. Run `npm start` to run the server locally on your computer. (This will start the local server on port `http://localhost:5000`)


#### List of endpoint created

1. `/api/product` POST request. (This endpoint is to create/add a new product)

2. `/api/products` GET request. (This endpoint is to fetch all products)

3. `/api/schedule` POST request. (This endpoint is to create/add a new schedule)

4. `api/schedules` GET request. (This endpoint is to fetch all schedules)

5. `api/pickup`  POST request. (This endpoint is to create/add a new pickup)

6. `api/pickups` GET request. (This endpoint is to fetch all pickup locations)

-These endpoints can be tested on POSTMAN once the server is running


#### Development app

```
$ npm install
$ npm start
```

## Folder Structure

```
├── controllers
├── middleware
├── models
│── routes
└── utils
   

```

---

---

- Note: I used `uuid` to generate unique `id` for new document added to DB.

- I started working on JWT AUTH for user authentication but later stopped due to time factor.
- No testing was done on the backend, I did all my testing on the frontend bacause the main focus of this challenge is Frontend

