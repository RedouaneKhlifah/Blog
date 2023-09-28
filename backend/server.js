import express from "express";
import dotenv from "dotenv";
import ArticalRoute from "./routes/ArticalRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.port;

app.use("/artical", ArticalRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
