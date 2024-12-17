import express from 'express'

import cors from "cors";
import session from "express-session";
import "dotenv/config";

import mongoose from 'mongoose';
import TravelRoutes from "./travel/routes.js";
import ExpenseRoutes from "./expenses/routes.js";
import "dotenv/config";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb+srv://Yanzheng:zzBEN2500--@kanbas.oxmte.mongodb.net/"
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "https://travel-serves.onrender.com",
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
// 添加测试路由
app.get("/test", async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const data = {};
        
        // 获取每个集合的数据
        for (let collection of collections) {
            const collectionData = await mongoose.connection.db
                .collection(collection.name)
                .find()
                .toArray();
            data[collection.name] = collectionData;
        }
        
        res.json({
            collections: collections.map(c => c.name),
            data: data
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(process.env.PORT || 4000)
