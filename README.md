# Node.js MEAN Stack Employee Management System

A full-stack employee management application built with Node.js, Express, Angular, and database support for both MongoDB Atlas and Azure Cosmos DB.

## Features

- **Full CRUD Operations**: Create, Read, Update, Delete employees
- **Data Validation**: Client-side and server-side validation for employee data
- **Multiple Database Support**: Compatible with both MongoDB Atlas and Azure Cosmos DB
- **Modern Architecture**: TypeScript, Express.js backend with Angular frontend
- **RESTful API**: Clean REST endpoints for employee management

## Database Support

This application supports both database options:

### MongoDB Atlas (Original)
- Traditional MongoDB hosting service
- Server-side schema validation using JSON Schema
- Connection via standard MongoDB connection string

### Azure Cosmos DB (New)
- MongoDB API compatibility in Azure Cosmos DB
- Client-side validation (Cosmos DB doesn't support MongoDB schema validation)
- Global distribution and guaranteed SLA
- Automatic scaling and indexing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Either a MongoDB Atlas account OR Azure Cosmos DB account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tjsingh85/node-mongodb.git
cd node-mongodb
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

### Configuration

#### For MongoDB Atlas:
Create a `.env` file in the server directory:
```env
ATLAS_URI=mongodb+srv://username:password@cluster.mongodb.net/meanStackExample?retryWrites=true&w=majority&appName=YourApp
```

#### For Azure Cosmos DB:
Create a `.env` file in the server directory:
```env
COSMOS_URI=mongodb://username:password@your-account.mongo.cosmos.azure.com:10255/meanStackExample?ssl=true&replicaSet=globaldb&retrytWrites=false&maxIdleTimeMS=120000&appName=@your-account@
```

> **Note**: If both `COSMOS_URI` and `ATLAS_URI` are set, the application will use Cosmos DB.

### Running the Application

#### Start the server:
```bash
cd server
npm start
```
The server will start on http://localhost:5200

#### Start the client (in development):
```bash
cd client
npm start
```
The client will start on http://localhost:4200

## API Endpoints

- **GET /employees** - Retrieve all employees
- **POST /employees** - Create a new employee
- **GET /employees/:id** - Retrieve a specific employee
- **PUT /employees/:id** - Update an existing employee
- **DELETE /employees/:id** - Delete an employee

## Employee Schema

```typescript
interface Employee {
  name: string;        // Required, minimum 3 characters
  position: string;    // Required, minimum 5 characters
  level: 'junior' | 'mid' | 'senior';  // Required
  _id?: ObjectId;      // Auto-generated
}
```

## Migration from MongoDB to Azure Cosmos DB

The application automatically detects which database you're using based on the connection string. Key differences:

### MongoDB Atlas Features:
- Server-side JSON schema validation
- Traditional MongoDB operations

### Azure Cosmos DB Features:
- Client-side validation (implemented in the application)
- Global distribution capabilities
- Automatic scaling
- MongoDB API compatibility

### Migration Steps:

1. **Create Azure Cosmos DB Account**: Set up a Cosmos DB account with MongoDB API
2. **Update Environment Variables**: Replace `ATLAS_URI` with `COSMOS_URI`
3. **Data Migration**: Use Azure Data Migration tools or export/import JSON data
4. **Test**: Verify all CRUD operations work correctly

## Development

### Build the server:
```bash
cd server
npm run build
```

### Lint the code:
```bash
cd server
npm run test
```

## Technology Stack

### Backend:
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB Driver** - Database connectivity (works with both MongoDB and Cosmos DB)

### Frontend:
- **Angular** - Frontend framework
- **Angular Material** - UI components
- **TypeScript** - Type safety

### Database Options:
- **MongoDB Atlas** - Cloud MongoDB service
- **Azure Cosmos DB** - Microsoft's globally distributed database service with MongoDB API

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache 2.0 License.

## Support

For issues and questions, please open an issue in the GitHub repository.