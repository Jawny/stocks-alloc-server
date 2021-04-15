// @ts-check
/** Express router providing stock information from yahoo finance.
 * @module routes/yahooApi
 * @requires express
 * @requires yahooFinance
 */
import express from "express";
import yahooFinance from "yahoo-finance2";

/**
 * Express router to mount yahoo finance api requests.
 * @type {object}
 * @const
 * @namespace Yahoo Api
 */
const yahooApiRoute = express.Router();

/**
 * Route serving stock summary
 * @name get/quote-summary
 * @function
 * @memberof module:routes/yahooApi~Yahoo Api
 * @inner
 * @see {@link https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/quoteSummary.md#module-options List of option strings for modules param.}
 * @param {Object} req.body - Request body.
 * @param {string} req.body.ticker - Stock ticker symbol.
 * @param {Array<string>} req.body.modules - Array of module option strings.
 * @return {Object} - Object with module summary details.
 */
yahooApiRoute.get("/quote-summary", async (req, res) => {
  const { ticker, modules } = req.body;

  const yahooSummary = await yahooFinance.quoteSummary(ticker, {
    modules,
  });
});

export default yahooApiRoute;
