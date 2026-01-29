import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./employee.routes";

// Generiert von GitHub Copilot
// Load environment variables from the .env file, where the COSMOS_DB_URI is configured
dotenv.config();

const { COSMOS_DB_URI } = process.env;

if (!COSMOS_DB_URI) {
  console.error(
    "No COSMOS_DB_URI environment variable has been defined in .env file"
  );
  process.exit(1);
}

// Generiert von GitHub Copilot
connectToDatabase(COSMOS_DB_URI)
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
