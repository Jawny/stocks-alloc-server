import express from "express";
import yahooFinance from "yahoo-finance2";
import { yahooApiRoutes } from "@routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const { ticker } = req.body;

  const test = await yahooFinance.quoteSummary(ticker, {
    modules: ["topHoldings"],
  });

  res.send(test);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
