import * as express from "express";
import { ObjectId } from "mongodb";
import { collections } from "./database";

export const employeeRouter = express.Router();
employeeRouter.use(express.json());

// Generiert von GitHub Copilot - Hilfsfunktion zur Extraktion der Fehlermeldung
const getErrorMessage = (error: unknown): string => {
    return error instanceof Error ? error.message : "Unknown error";
};

// Generiert von GitHub Copilot - Hilfsfunktion zur Erstellung einer ObjectId-Abfrage mit Validierung
const createIdQuery = (id: string) => {
    if (!ObjectId.isValid(id)) {
        throw new Error(`Invalid ObjectId: ${id}`);
    }
    return { _id: new ObjectId(id) };
};

// Generiert von GitHub Copilot - Abrufen aller Mitarbeiter
employeeRouter.get("/", async (_req, res) => {
    try {
        const employees = await collections?.employees?.find({}).toArray();
        res.status(200).send(employees);
    } catch (error) {
        res.status(400).send(getErrorMessage(error));
    }
});

// Generiert von GitHub Copilot - Abrufen eines einzelnen Mitarbeiters nach ID
employeeRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = createIdQuery(id);
        const employee = await collections?.employees?.findOne(query);

        if (employee) {
            res.status(200).send(employee);
        } else {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        }
    } catch (error) {
        res.status(404).send(`Failed to find an employee: ID ${req?.params?.id}`);
    }
});

// Generiert von GitHub Copilot - Erstellen eines neuen Mitarbeiters
employeeRouter.post("/", async (req, res) => {
    try {
        const employee = req.body;
        const result = await collections?.employees?.insertOne(employee);

        if (result?.acknowledged) {
            res.status(201).send(`Created a new employee: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new employee.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(getErrorMessage(error));
    }
});

// Generiert von GitHub Copilot - Aktualisieren eines Mitarbeiters
employeeRouter.put("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const employee = req.body;
        const query = createIdQuery(id);
        const result = await collections?.employees?.updateOne(query, { $set: employee });

        if (result && result.matchedCount) {
            res.status(200).send(`Updated an employee: ID ${id}.`);
        } else if (!result?.matchedCount) {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an employee: ID ${id}`);
        }
    } catch (error) {
        const message = getErrorMessage(error);
        console.error(message);
        res.status(400).send(message);
    }
});

// Generiert von GitHub Copilot - Löschen eines Mitarbeiters
employeeRouter.delete("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = createIdQuery(id);
        const result = await collections?.employees?.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Removed an employee: ID ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove an employee: ID ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        }
    } catch (error) {
        const message = getErrorMessage(error);
        console.error(message);
        res.status(400).send(message);
    }
});
