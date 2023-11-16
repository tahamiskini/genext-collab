# Genext-Collab

Welcome to Genext-Collab, a collaborative task management platform designed to streamline teamwork, project management, and task collaboration. With Genext-Collab, you can easily organize, assign, and track tasks within your projects, ensuring that your team stays productive and organized.

### Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)

Drag and drop functionality for lists, cards and subtasks implemented using [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd).


## Features

- **Task Management:** Create, assign, and prioritize tasks for your projects.
- **Project Organization:** Organize tasks into projects to keep your work structured.
- **User Authentication:** Securely manage user accounts and permissions.
- **Mobile-Friendly:** Access Genext-Collab on-the-go from mobile devices.
- **Customization:** Tailor the app to your team's unique needs with customizable fields and workflows.

## Getting Started

To get started with Genext-Collab, follow these steps:

### Installation

1. Clone the repo
   ```sh
   https://github.com/tahamiskini/genext-collab.git
   ```
2. Install Dependencies (client & server)
   ```sh
   npm install
   cd client
   npm install
   ```
3. Set Env Variables
   ```sh
   # Create a .env file in root folder and add the following
   MONGODB_URI=mongodb://127.0.0.1:27017/localtaha
   SESSION_SECRET=abc123
   ```

