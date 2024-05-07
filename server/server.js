import express from 'express';
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requrest with JSON payloads from req.body

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});

// app.get("/", (req, res) => {
//     // root localhost5000
//     res.send("Hello world!");
    
// });


