// We use express to create our servers endpoints, and listen for & respond to requests from the frontend
import express from "express";
// We use dotenv so that we can access our environment variables
import "dotenv/config";

import * as db from "./db/index.js";


// Create an instance of express
const requestHandler = express();
// Storing our port value from the .env file
const port = process.env.PORT;

// The middleware express.json() parses incoming JSON requests and puts the parsed data in req.body
requestHandler.use(express.json());

// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

// GET template
requestHandler.get("/api/v1/get-template", (req, res) => {
    res.send("Hello World!");
  });

  // Get air quality data
// Get air quality data
requestHandler.get("/api/v1/air-quality-data", async (req, res) => {
	const dbResponse = await db.query("select * from air_quality limit 5");
	console.log(dbResponse);
	res.send(dbResponse);
});