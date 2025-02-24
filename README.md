# QuickSnips - Code Snippet Manager

A web application for managing and sharing code snippets with authentication.

## Features

- 🔐 User Authentication (Register/Login)
- 📝 Create and manage code snippets
- 🗑️ Delete snippets
- 👀 View detailed snippets
- 🎨 Clean, modern UI with Tailwind CSS

## Tech Stack

- Frontend:
  - React
  - React Router
  - Axios
  - Tailwind CSS
  - React Hot Toast

- Backend:
  - Node.js
  - Express
  - MongoDB
  - JWT Authentication
  - bcrypt

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/realsubodh/QuickSnips.git
cd QuickSnips
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Set up environment variables:
Create a .env file in the server directory:
```env
MONGODB_URI=mongodb://localhost:27017/snippets
PORT=3001
JWT_SECRET=your_secret_key
```

4. Start the development servers:
```bash
# Start backend server (from server directory)
node index.js

# Start frontend development server (from root directory)
npm run dev
```

5. Open http://localhost:5173 in your browser

## API Endpoints

- POST /api/register - Register new user
- POST /api/login - Login user
- GET /api/snippets - Get all snippets (authenticated)
- POST /api/snippets - Create new snippet (authenticated)
- DELETE /api/snippets/:id - Delete snippet (authenticated)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.