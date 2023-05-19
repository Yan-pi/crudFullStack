# crudFullStack

A FullStack CRUD using MySQL for SQL database, Node.js and Express for the back-end, React with "create vite@latest", styled-components, axios, and react-toastify for front-end development.

On this page, you can interact with a database to **Create, Read, Update, Delete** user data such as name, email, phone number, and date of birth.

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a FullStack CRUD application that allows you to perform basic Create, Read, Update, and Delete operations on user data. The application is built using a MySQL database for storing the data, while the back-end is implemented using Node.js and Express. The front-end is developed with React, utilizing "create vite@latest" as the project setup tool. The user interface is enhanced with styled-components for styling, axios for handling HTTP requests, and react-toastify for displaying notifications.

## Technologies

The following technologies are used in this project:

- MySQL: Relational database management system
- Node.js: JavaScript runtime for server-side development
- Express: Web application framework for Node.js
- React: JavaScript library for building user interfaces
- create-vite@latest: Project setup tool for React
- styled-components: CSS-in-JS library for styling React components
- axios: Promise-based HTTP client for making API requests
- react-toastify: Notification library for React

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/Yan-pi/crudFullStack.git
   ```

2. Navigate to the project directory:

   ```shell
   cd crudFullStack
   ```

3. Install the dependencies for both the back-end and front-end:

   ```shell
   cd api && npm install
   ```

   ```shell
   cd frontend && npm install
   ```

4. Configure the MySQL database:

   - Create a new database and note down the connection details (host, port, username, password).

   - Update the database configuration in the `server/.env` file.
   - ![image](https://github.com/Yan-pi/crudFullStack/assets/102800044/c5102324-3670-4724-b171-3d118219da99)


5. Start the back-end server:

   ```shell
   cd api && npm start
   ```

6. Start the front-end development server:

   ```shell
   cd frontend && npm run dev
   ```

7. Access the application by visiting `http://localhost:3000` in your web browser.

## Usage

To use the application, follow these steps:

1. Open the application in your web browser by accessing `http://localhost:3000`.

2. You will see a user interface where you can perform CRUD operations on user data.

   - To **create** a new user, fill the required information on the forms and click on "Submit".

   - To **read** user data, the existing users will be displayed in a table. 

   - To **update** a user's information, click on the "Edit" icon corresponding to the user in the table and make the necessary changes.

   - To **delete** a user, click on the "Delete" icon corresponding to the user in the table.

3. The application will provide notifications using react-toastify to display success messages, error messages, etc.

## Contributing

Contributions to the project are welcome and encouraged. Here are some ways you can contribute:

- Report bugs or suggest improvements by [creating an issue in the GitHub repository.]

Fork the repository and submit pull requests with your proposed changes.
Help answer questions or provide support to other users by participating in discussions on the repository's Discussions page.
Before contributing, please ensure that you have read and understood the Code of Conduct. Be respectful to others and follow the guidelines to maintain a positive and inclusive environment.

License
This project is licensed under the MIT License. You are free to modify, distribute, and use the code in this project for personal or commercial purposes. Refer to the LICENSE file for more information.

Feel free to explore the project, contribute, or use it as a reference for your own FullStack CRUD applications. If you encounter any issues or have any questions, please don't hesitate to reach out.
