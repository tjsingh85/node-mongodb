import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./employee.routes";

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { ATLAS_URI, COSMOS_URI } = process.env;

// Use Cosmos DB URI if available, otherwise fall back to MongoDB Atlas
const databaseUri = COSMOS_URI || ATLAS_URI;

if (!databaseUri) {
  console.error(
    "No database connection URI found. Please set either COSMOS_URI (for Azure Cosmos DB) or ATLAS_URI (for MongoDB Atlas) in your environment variables."
  );
  process.exit(1);
}

// Log which database type we're connecting to
if (COSMOS_URI) {
  console.log("Connecting to Azure Cosmos DB with MongoDB API...");
} else {
  console.log("Connecting to MongoDB Atlas...");
}

connectToDatabase(databaseUri)
  .then(() => {
    const app = express();
    app.use(cors());
    app.use("/employees", employeeRouter);

    // start the Express server
    app.listen(5200, () => {
      console.log(`Server running at http://localhost:5200...`);
    });
  })
  .catch((error) => console.error(error));
