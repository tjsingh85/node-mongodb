import * as mongodb from "mongodb";
import { Employee } from "./employee";

export const collections: {
    employees?: mongodb.Collection<Employee>;
} = {};

// Generiert von GitHub Copilot
export async function connectToDatabase(uri: string) {
    // Azure Cosmos DB connection options
    const client = new mongodb.MongoClient(uri, {
        ssl: true,
        retryWrites: false,
    });
    await client.connect();

    const db = client.db("meanStackExample");
    // Note: Azure Cosmos DB has limited support for schema validation
    // Schema validation is optional and may not work exactly like MongoDB
    await applySchemaValidation(db);

    const employeesCollection = db.collection<Employee>("employees");
    collections.employees = employeesCollection;
}

// Generiert von GitHub Copilot
// Note: Azure Cosmos DB has limited support for JSON schema validation compared to MongoDB
// This function attempts to apply schema validation but may not work exactly as in native MongoDB
async function applySchemaValidation(db: mongodb.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position", "level"],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                position: {
                    bsonType: "string",
                    description: "'position' is required and is a string",
                    minLength: 5
                },
                level: {
                    bsonType: "string",
                    description: "'level' is required and is one of 'junior', 'mid', or 'senior'",
                    enum: ["junior", "mid", "senior"],
                },
            },
        },
    };

    // Try applying the modification to the collection, if the collection doesn't exist, create it
    // Note: Azure Cosmos DB may not fully support collMod and schema validation
    try {
        await db.command({
            collMod: "employees",
            validator: jsonSchema
        });
    } catch (error) {
        if (error instanceof mongodb.MongoServerError && error.codeName === "NamespaceNotFound") {
            // Create collection without validator if Cosmos DB doesn't support it
            try {
                await db.createCollection("employees", {validator: jsonSchema});
            } catch (validatorError) {
                // If validator is not supported, create collection without it
                console.warn("Schema validation is not supported. Creating collection without validator.");
                await db.createCollection("employees");
            }
        } else {
            // Log warning for other schema validation errors
            console.warn("Schema validation may not be fully supported in Azure Cosmos DB:", error instanceof Error ? error.message : "Unknown error");
        }
    }
}
