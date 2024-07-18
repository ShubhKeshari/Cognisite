# Cognisite

## Introduction

This project is a dynamic Gantt chart application that visualizes project timelines with automatic end date calculations. Users can customize inputs such as activity name, start date, workers count, and workers perday efficiency,total work for accurate timeline generation.

## Project Type

Frontend | Backend | FullStack

## Deplolyed App

Frontend: https://cognisitedashboard.onrender.com

Backend: https://cognisite-zzni.onrender.com

## Directory Structure

```
📦 
├─ README.md
├─ backend
│  ├─ .gitignore
│  ├─ index.js
│  ├─ models
│  │  └─ task.model.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ tasks.routes.js
│  └─ utils
│     └─ db.config.js
└─ frontend
   ├─ .eslintrc.cjs
   ├─ .gitignore
   ├─ README.md
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ Pages
   │  │  ├─ AddActivity.jsx
   │  │  └─ Error.jsx
   │  ├─ assets
   │  │  ├─ Logo.png
   │  │  └─ error.webp
   │  ├─ components
   │  │  ├─ ChartComponent.jsx
   │  │  └─ Navbar.jsx
   │  ├─ index.css
   │  ├─ main.jsx
   │  └─ routes
   │     └─ AllRoutes.jsx
   ├─ util
   │  └─ vars.js
   └─ vite.config.js
```

# Project Features

- Interactive Gantt Chart Visualization
- Customizable Data Input for Projects
- Dynamic End Date Calculation
  
## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

```bash
git clone https://github.com/ShubhKeshari/Cognisite.git

```
To start Frontend

```bash
cd frontend

npm install

npm run dev

```
To start Backend

```bash
cd backend

npm install

npm run server
```

## API Endpoints

Backend Applications provide a list of your API endpoints, methods, brief descriptions.

<p>GET /tasks/getTask - Get all the data of Activites with their start and end date</p>
<p>POST /tasks/addTask - To add the new activity data to the database</p>

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- React.js
- Chakra-ui
- Chart.js
- Node.js
- Express.js
- MongoDB
