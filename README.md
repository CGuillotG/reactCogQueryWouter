# React + Vite Demo

This is a sample Vite React application with Cognito authentication using React Query (Tanstack), Tailwind CSS, and Vitest for testing.

## Installation

Install dependencies
```bash
pnpm install
```
Create a `.env` file in the root directory and add the following cognito credentials:
```bash
# AWS Region
VITE_AWS_REGION=********

# AWS Cognito User Pool ID
VITE_COGNITO_USER_POOL_ID=***********

# AWS Cognito App Client ID
VITE_COGNITO_APP_CLIENT_ID=***************

```

## Development
Run the application
```bash
pnpm dev
```

## Testing

To run the tests once
```bash
pnpm test
```
To run the tests in watch mode
```bash
pnpm test:watch
```
To run the tests in watch mode with UI
```bash
pnpm test:ui
```

## Screenshots

### Sign In Page
![Screenshot 1](./screenshots/screenshot01.png)

### Sign In Page - User & Password errors
![Screenshot 2](./screenshots/screenshot02.png)
![Screenshot 3](./screenshots/screenshot03.png)

### Reset Password Page
- In Construction

### Sign Up Page
![Screenshot 4](./screenshots/screenshot04.png)

### Sign Up Page - Password policy errors
![Screenshot 5](./screenshots/screenshot05.png)
![Screenshot 6](./screenshots/screenshot06.png)
![Screenshot 7](./screenshots/screenshot07.png)
![Screenshot 8](./screenshots/screenshot08.png)

### Sign Up Confirmation Page
![Screenshot 9](./screenshots/screenshot09.png)

### Emailed Code
![Screenshot 10](./screenshots/screenshot10.png)

### Signed In Home Page
![Screenshot 11](./screenshots/screenshot11.png)
![Screenshot 12](./screenshots/screenshot12.png)
