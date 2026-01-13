# Server Testing

This directory contains the backend server for the MEAN stack application with comprehensive test coverage.

## Running Tests

```bash
# Run tests with coverage report
npm test

# Run tests in watch mode (without coverage)
npm run test:watch

# Run linter
npm run lint
```

## Test Coverage

Current coverage: **97.33%**

- Statements: 97.33% (73/75)
- Branches: 74.07% (80/108)
- Functions: 100% (14/14)
- Lines: 97.14% (68/70)

## Test Structure

Tests are located in `src/__tests__/` directory:

- `database.test.ts` - Tests for database connection and schema validation
- `employee.routes.test.ts` - Tests for all employee CRUD endpoints

## Technologies

- **Jest** - Testing framework
- **Supertest** - HTTP assertion library
- **ts-jest** - TypeScript support for Jest

## CI/CD

GitHub Actions automatically runs tests on every pull request and comments the coverage report.
