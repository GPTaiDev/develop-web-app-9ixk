# Habit Tracker Web App

## Description
This web app allows users to add, view, edit, and delete daily habits. It features a dashboard for tracking progress, setting reminders, and visualizing streaks. The app includes user authentication for a personalized experience and data security.

## Features
- User Authentication
- CRUD Operations for Habits
- Dashboard for Tracking Progress
- Setting Reminders
- Visualizing Streaks
- Responsive Design
- Theme Switching
- Offline Support
- User Preferences
- Export/Import Habits
- Help Documentation

## Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Usage
After logging in, users can add new habits through the 'Add Habit' form. Habits can be viewed, edited, or deleted from the dashboard. The dashboard also displays progress and streaks.

## API Documentation
The app uses a RESTful API for user authentication and habit management. Endpoints include:
- POST /auth/login
- POST /auth/register
- GET /habits
- POST /habits
- PUT /habits/:id
- DELETE /habits/:id

## Development Setup
Use `npm run dev` for a development server with hot reloading.

## Testing
Run tests with `npm test`.

## Deployment
Build the app for production with `npm run build`. Deploy the `/build` directory to your server.

## License
This project is licensed under the MIT License.