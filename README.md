Task Manager App

This is a Task Manager web application built with React. It helps users manage their tasks by allowing them to add, edit, mark as done, delete, and filter tasks based on various criteria such as priority, completion status, and search query. The app also supports managing overdue tasks separately.

Overview

The Task Manager app provides the following features:

- Add Task: Users can add new tasks specifying a task name, description, priority, and deadline.
- Edit Task: Users can edit existing tasks including modifying task details such as name, description, priority, and deadline.
- Mark Task as Done: Users can mark tasks as done when they are completed.
- Delete Task: Users can delete tasks individually.
- Filter Tasks: Users can filter tasks based on priority, completion status, and search query.
- Manage Overdue Tasks: Overdue tasks are handled separately and can be managed by deleting them.

Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/your-username/task-manager-app.git

2. Navigate into the project directory:

cd task-manager-app


3. Install dependencies using npm or yarn:

npm install

or

yarn install


4. Start the development server:

```bash
npm start
```
or
```bash
yarn start
```

5. Open your browser and visit `http://localhost:3000` to view the Task Manager app.

Assumptions

During the development process, the following assumptions were made:

1. The app primarily targets individual users for personal task management rather than collaborative task management for teams.
2. Tasks are stored locally in the browser's localStorage. No backend server is implemented for data storage.
3. Overdue tasks are treated separately and are managed in a dedicated section.
4. Date format validation is not implemented. It is assumed that users will input valid dates in the supported format (YYYY-MM-DD).
5. Priority levels are predefined as "Top Priority," "Middle Priority," and "Less Priority" with no option for custom priority levels.

Technologies Used

- React: JavaScript library for building user interfaces.
- localStorage: Web storage API used for storing tasks locally in the browser.
- HTML/CSS: Markup and styling for the user interface.
- JavaScript (ES6+): Programming language for application logic.

Contributors

- Sai Prabhu(https://github.com/Saiprabhu0502)


License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
