import "module-alias/register";
import cors from "cors";
import express from "express";
import { yahooApiRoutes } from "@routes";
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", yahooApiRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}!`);
});
