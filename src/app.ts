import "module-alias/register";
import express from "express";
import { yahooApiRoutes } from "@routes";
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", yahooApiRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}!`);
});
