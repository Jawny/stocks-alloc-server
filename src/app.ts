import express from "express";
import { yahooApiRoutes } from "@routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", yahooApiRoutes);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
