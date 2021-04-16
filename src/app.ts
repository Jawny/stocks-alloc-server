import "module-alias/register";
import express from "express";
import { yahooApiRoutes } from "@routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", yahooApiRoutes);

app.listen(3000, () => {
  console.log("server listening on port 3000!");
});
