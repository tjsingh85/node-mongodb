# Node.js + Angular Application with Azure Cosmos DB

This is a MEAN stack application (MongoDB API, Express, Angular, Node.js) that uses Azure Cosmos DB as the database backend.

## Prerequisites

- Node.js (v14 or higher)
- Azure Cosmos DB account with MongoDB API enabled
- npm or yarn package manager

## Setup

### 1. Azure Cosmos DB Configuration

1. Create an Azure Cosmos DB account with the MongoDB API
2. Get your connection string from the Azure Portal:
   - Navigate to your Cosmos DB account
   - Go to "Connection String" section
   - Copy the Primary Connection String

### 2. Environment Configuration

1. Navigate to the `server` directory
2. Update the `.env` file with your Azure Cosmos DB connection string:

```bash
COSMOS_DB_URI=mongodb://<your-account>:<your-key>@<your-account>.mongo.cosmos.azure.com:10255/meanStackExample?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@<your-account>@
```

### 3. Install Dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 4. Run the Application

#### Backend Server (Port 5200)
```bash
cd server
npm start
```

#### Frontend Client (Port 4200)
```bash
cd client
npm start
```

## API Endpoints

The server exposes the following REST API endpoints for employee management:

- `GET /employees` - Get all employees
- `GET /employees/:id` - Get a specific employee by ID
- `POST /employees` - Create a new employee
- `PUT /employees/:id` - Update an employee
- `DELETE /employees/:id` - Delete an employee

## Database Structure

The application uses a single collection called `employees` with the following schema:

```typescript
{
  _id: ObjectId,
  name: string,
  position: string,
  level: "junior" | "mid" | "senior"
}
```

## Azure Cosmos DB Notes

- Azure Cosmos DB uses the MongoDB API for compatibility
- SSL/TLS is required for all connections (`ssl=true`)
- Retryable writes are disabled (`retrywrites=false`) for better Cosmos DB compatibility
- Schema validation may have limited support compared to native MongoDB
- Port 10255 is used for Cosmos DB MongoDB API connections

## Linting

To run the linter on the server code:

```bash
cd server
npm test
```

## License

Apache 2.0
