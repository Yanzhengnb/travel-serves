import express from 'express'

import cors from "cors";
import session from "express-session";
import "dotenv/config";

import mongoose from 'mongoose';
import TravelRoutes from "./travel/routes.js";
import ExpenseRoutes from "./expenses/routes.js";
import "dotenv/config";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
})
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "lax",   
      secure: false       
    }
  };
  if (process.env.NODE_ENV !== "development") {
    // sessionOptions.proxy = true;
    // sessionOptions.cookie = {
    //   sameSite: "none",
    //   secure: true,
    //   domain: process.env.NODE_SERVER_DOMAIN,
    // };
  }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionOptions));


TravelRoutes(app);
ExpenseRoutes(app);
app.listen(process.env.PORT || 4000)