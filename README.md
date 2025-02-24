# BlogUI - Modern Blog Writing Platform

A modern, clean blog writing interface built with React.js and Vite, providing a seamless experience for writing and managing blog content.

## Project Structure
```
BlogUI/
└── codeEX/
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── PrivateRoute.jsx
    │   │   ├── RegisterForm.jsx
    │   │   ├── SnippetForm.jsx
    │   │   └── SnippetList.jsx
    │   ├── pages/
    │   │   ├── DashboardPage.jsx
    │   │   ├── Home.jsx
    │   │   ├── LoginPage.jsx
    │   │   └── RegisterPage.jsx
    │   ├── api/
    │   │   └── axios.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── public/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## Features

- 🔐 User Authentication (Register/Login)
- 📝 Blog Post Creation and Management
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast Development with Vite
- 📱 Responsive Design

## Tech Stack

- Frontend:
  - React.js
  - Tailwind CSS
  - React Router DOM
  - Axios
  - React Hot Toast

## Running the Project

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Step 1: Clone the Repository
```bash
git clone https://github.com/aditya3singh/CodeEX.git
cd BlogUI/codeEX
```

### Step 2: Install Dependencies
Make sure you're in the codeEX directory:
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: View the Application
Open your browser and navigate to:
```
http://localhost:5173
```

### Common Issues & Solutions

1. If you see module not found errors:
```bash
npm install
npm run dev
```

2. If port 5173 is already in use:
```bash
# Kill the process using port 5173
npx kill-port 5173
# Then restart the server
npm run dev
```

3. If you get Vite errors:
```bash
# Clear Vite cache
npm run clean
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean Vite cache (if needed)

To start the backend server, navigate to the server directory using `cd server`, then run `npm i` to install dependencies, followed by `npm i nodemon` to add nodemon. Finally, execute `npx nodemon index.js` to launch the server.
## Project Navigation

1. Register/Login:
   - Visit the homepage
   - Click "Register" to create a new account
   - Or "Login" if you already have an account

2. Dashboard:
   - After authentication, you'll be redirected to the dashboard
   - Create new blog posts
   - View and manage existing posts

3. Blog Management:
   - Create new posts using the editor
   - View all posts in the list
   - Edit or delete existing posts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

