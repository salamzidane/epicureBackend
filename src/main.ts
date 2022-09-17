// import express from "express";
// import routes from './routes/index';
// import { connectDb } from "./db/index";
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(cors());
// app.use(routes);
// connectDb().then(async () => {
//     app.listen(3001, () => console.log("Listening on http://localhost:3001"));
// });


const restaurants ={
    restaurant_arry: [
        {
          //restaurantImage:chefImage,
          restaurantName:"shavor",
          restaurantChef:"soso",
          restaurantRate:30
        },
        {
          //restaurantImage:chefImage,
          restaurantName:"safaa",
          restaurantChef:"soso",
          restaurantRate:100
        },
        {
          //restaurantImage:chefImage,
          restaurantName:"shawatina",
          restaurantChef:"gordon",
          restaurantRate:20
        }
      ]
}

import express from "express";
//const express = require('express');
const app = express();
app.get("/chefs", function (req, res) {
    res.json(restaurants);
});
app.listen(3001, () => console.log("Listening..."));