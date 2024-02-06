

// import React, { useState, useEffect } from "react";
// import "./App.css"; 

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [priority, setPriority] = useState("top");
//   const [deadline, setDeadline] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editTaskId, setEditTaskId] = useState(null);
//   const [overdueTasks, setOverdueTasks] = useState([]);

//   useEffect(() => {
//     // Load tasks from local storage on component mount
//     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//     const savedCompletedTasks = JSON.parse(
//       localStorage.getItem("completedTasks")
//     );
//     const savedOverdueTasks = JSON.parse(localStorage.getItem("overdueTasks"));
//     if (savedTasks) {
//       setTasks(savedTasks);
//     }
//     if (savedCompletedTasks) {
//       setCompletedTasks(savedCompletedTasks);
//     }
//     if (savedOverdueTasks) {
//       setOverdueTasks(savedOverdueTasks);
//     }
//   }, []);

//   useEffect(() => {
//     // Save tasks to local storage whenever tasks state changes
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   useEffect(() => {
//     // Save completed tasks to local storage whenever completedTasks state changes
//     localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
//   }, [completedTasks]);

//   useEffect(() => {
//     // Save overdue tasks to local storage whenever overdueTasks state changes
//     localStorage.setItem("overdueTasks", JSON.stringify(overdueTasks));
//   }, [overdueTasks]);

//   const handleTaskChange = (e) => {
//     setTask(e.target.value);
//   };

//   const handleTaskDescriptionChange = (e) => {
//     setTaskDescription(e.target.value);
//   };

//   const handlePriorityChange = (e) => {
//     setPriority(e.target.value);
//   };

//   const handleDeadlineChange = (e) => {
//     setDeadline(e.target.value);
//   };

//   const addTask = () => {
//     if (task.trim() === "" || deadline === "") {
//       alert("Please enter a task and select a valid deadline.");
//       return;
//     }

//     const selectedDate = new Date(deadline);
//     const currentDate = new Date();

//     if (selectedDate <= currentDate) {
//       alert("Please select a future date for the deadline.");
//       return;
//     }

//     if (editMode) {
//       const updatedTasks = tasks.map((t) =>
//         t.id === editTaskId
//           ? { ...t, task, taskDescription, priority, deadline }
//           : t
//       );
//       setTasks(updatedTasks);
//       setEditMode(false);
//       setEditTaskId(null);
//     } else {
//       const newTask = {
//         id: tasks.length + 1,
//         task,
//         taskDescription,
//         priority,
//         deadline,
//         done: false,
//       };
//       setTasks([...tasks, newTask]);
//     }

//     setTask("");
//     setTaskDescription("");
//     setPriority("top");
//     setDeadline("");
//   };

//   // const markDone = (id) => {
//   //   const updatedTasks = tasks.map((t) =>
//   //     t.id === id ? { ...t, done: true } : t
//   //   );
//   //   setTasks(updatedTasks);

//   //   const completedTask = tasks.find((t) => t.id === id);
//   //   if (completedTask) {
//   //     setCompletedTasks([...completedTasks, completedTask]);
//   //   }
//   // };

//   const markDone = (id) => {
//     const updatedTasks = tasks.filter((t) => {
//         if (t.id === id) {
//             const completedTask = { ...t, done: true };
//             setCompletedTasks([...completedTasks, completedTask]);
//             return false; // Filter out the task from the tasks array
//         }
//         return true; // Keep other tasks in the array
//     });
//     setTasks(updatedTasks);
// };


//   const moveToOverdue = (id) => {
//     const taskToMove = tasks.find((t) => t.id === id);
//     if (taskToMove) {
//       const updatedTasks = tasks.filter((t) => t.id !== id);
//       setTasks(updatedTasks);
//       const updatedOverdueTasks = [
//         ...overdueTasks,
//         { ...taskToMove, done: false },
//       ];
//       setOverdueTasks(updatedOverdueTasks);
//     }
//   };

//   const deleteTask = (id, isCompletedTask) => {
//     if (isCompletedTask) {
//       const updatedCompletedTasks = completedTasks.filter((ct) => ct.id !== id);
//       setCompletedTasks(updatedCompletedTasks);
//       localStorage.setItem(
//         "completedTasks",
//         JSON.stringify(updatedCompletedTasks)
//       );
//     } else {
//       const updatedTasks = tasks.filter((t) => t.id !== id);
//       setTasks(updatedTasks);
//       localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//     }
//   };

//   const editTask = (id) => {
//     const taskToEdit = tasks.find((t) => t.id === id);
//     if (taskToEdit) {
//       setTask(taskToEdit.task);
//       setTaskDescription(taskToEdit.taskDescription);
//       setPriority(taskToEdit.priority);
//       setDeadline(taskToEdit.deadline);
//       setEditMode(true);
//       setEditTaskId(id);
//     }
//   };

//   const deleteOverdueTask = (id) => {
//     const updatedOverdueTasks = overdueTasks.filter((t) => t.id !== id);
//     setOverdueTasks(updatedOverdueTasks);
//     localStorage.setItem("overdueTasks", JSON.stringify(updatedOverdueTasks));
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Task Manager</h1>
//       </header>
//       <main>
//         <div className="task-form">
//           <input
//             type="text"
//             id="task"
//             placeholder="Enter task..."
//             value={task}
//             onChange={handleTaskChange}
//           />
//           <input
//             type="text"
//             id="task-description"
//             placeholder="Enter task description..."
//             value={taskDescription}
//             onChange={handleTaskDescriptionChange}
//           />
//           <select
//             id="priority"
//             value={priority}
//             onChange={handlePriorityChange}
//           >
//             <option value="top">Top Priority</option>
//             <option value="middle">Middle Priority</option>
//             <option value="low">Less Priority</option>
//           </select>
//           <input
//             type="date"
//             id="deadline"
//             value={deadline}
//             onChange={handleDeadlineChange}
//           />
//           <button id="add-task" onClick={addTask}>
//             {editMode ? "Update Task" : "Add Task"}
//           </button>
//         </div>
//         <h2 className="heading">Upcoming Tasks</h2>
//         <div className="task-list" id="task-list">
//           <table>
//             <thead>
//               <tr>
//                 <th>Task Name</th>
//                 <th>Description</th>
//                 <th>Priority</th>
//                 <th>Deadline</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((t) => (
//                 <tr key={t.id}>
//                   <td>{t.task}</td>
//                   <td>{t.taskDescription}</td>
//                   <td>{t.priority}</td>
//                   <td>{t.deadline}</td>
//                   <td>
//                     {!t.done && (
//                       <div>
//                         <button
//                           className="mark-done"
//                           onClick={() => markDone(t.id)}
//                         >
//                           Mark Done
//                         </button>
//                         <button
//                           className="edit-task"
//                           onClick={() => editTask(t.id)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="delete-task"
//                           onClick={() => deleteTask(t.id, false)}
//                         >
//                           Delete
//                         </button>
//                         <button
//                           className="move-to-overdue"
//                           onClick={() => moveToOverdue(t.id)}
//                         >
//                           Overdue
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <h2 className="heading">Overdue Tasks</h2>
//         <div className="overdue-task-list" id="overdue-task-list">
//           <table>
//             <thead>
//               <tr>
//                 <th>Task Name</th>
//                 <th>Description</th>
//                 <th>Priority</th>
//                 <th>Deadline</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {overdueTasks.map((t) => (
//                 <tr key={t.id}>
//                   <td>{t.task}</td>
//                   <td>{t.taskDescription}</td>
//                   <td>{t.priority}</td>
//                   <td>{t.deadline}</td>
//                   <td>
//                     {!t.done && (
//                       <div>
//                         <button
//                           className="delete-task"
//                           onClick={() => deleteOverdueTask(t.id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="completed-task-list">
//           <h2 className="cheading">Completed Tasks</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Task Name</th>
//                 <th>Description</th>
//                 <th>Priority</th>
//                 <th>Deadline</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {completedTasks.map((ct) => (
//                 <tr key={ct.id}>
//                   <td>{ct.task}</td>
//                   <td>{ct.taskDescription}</td>
//                   <td>{ct.priority}</td>
//                   <td>{ct.deadline}</td>
//                   <td>
//                     <button
//                       className="delete-task"
//                       onClick={() => deleteTask(ct.id, true)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [overdueTasks, setOverdueTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [completionFilter, setCompletionFilter] = useState("all");

  useEffect(() => {
    // Load tasks from local storage on component mount
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const savedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks")
    );
    const savedOverdueTasks = JSON.parse(localStorage.getItem("overdueTasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
    if (savedCompletedTasks) {
      setCompletedTasks(savedCompletedTasks);
    }
    if (savedOverdueTasks) {
      setOverdueTasks(savedOverdueTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // Save completed tasks to local storage whenever completedTasks state changes
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    // Save overdue tasks to local storage whenever overdueTasks state changes
    localStorage.setItem("overdueTasks", JSON.stringify(overdueTasks));
  }, [overdueTasks]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriorityFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const handleCompletionFilterChange = (e) => {
    setCompletionFilter(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "" || deadline === "") {
      alert("Please enter a task and select a valid deadline.");
      return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert("Please select a future date for the deadline.");
      return;
    }

    if (editMode) {
      const updatedTasks = tasks.map((t) =>
        t.id === editTaskId
          ? { ...t, task, taskDescription, priority, deadline }
          : t
      );
      setTasks(updatedTasks);
      setEditMode(false);
      setEditTaskId(null);
    } else {
      const newTask = {
        id: tasks.length + 1,
        task,
        taskDescription,
        priority,
        deadline,
        done: false,
      };
      setTasks([...tasks, newTask]);
    }

    setTask("");
    setTaskDescription("");
    setPriority("top");
    setDeadline("");
  };

  const markDone = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);

    const completedTask = tasks.find((t) => t.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const moveToOverdue = (id) => {
    const taskToMove = tasks.find((t) => t.id === id);
    if (taskToMove) {
      const updatedTasks = tasks.filter((t) => t.id !== id);
      setTasks(updatedTasks);
      const updatedOverdueTasks = [
        ...overdueTasks,
        { ...taskToMove, done: false },
      ];
      setOverdueTasks(updatedOverdueTasks);
    }
  };

  const deleteTask = (id, isCompletedTask) => {
    if (isCompletedTask) {
      const updatedCompletedTasks = completedTasks.filter((ct) => ct.id !== id);
      setCompletedTasks(updatedCompletedTasks);
      localStorage.setItem(
        "completedTasks",
        JSON.stringify(updatedCompletedTasks)
      );
    } else {
      const updatedTasks = tasks.filter((t) => t.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setTaskDescription(taskToEdit.taskDescription);
      setPriority(taskToEdit.priority);
      setDeadline(taskToEdit.deadline);
      setEditMode(true);
      setEditTaskId(id);
    }
  };

  const deleteOverdueTask = (id) => {
    const updatedOverdueTasks = overdueTasks.filter((t) => t.id !== id);
    setOverdueTasks(updatedOverdueTasks);
    localStorage.setItem("overdueTasks", JSON.stringify(updatedOverdueTasks));
  };

  // Filter tasks based on search query, priority filter, and completion status filter
  const filteredTasks = tasks.filter((t) => {
    // Search query filter
    if (
      searchQuery !== "" &&
      !t.task.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    // Priority filter
    if (priorityFilter !== "all" && t.priority !== priorityFilter) {
      return false;
    }
    // Completion status filter
    if (
      completionFilter !== "all" &&
      (t.done !== (completionFilter === "completed"))
    ) {
      return false;
    }
    return true;
  });

  // Filter overdue tasks based on search query
  const filteredOverdueTasks = overdueTasks.filter((t) => {
    // Search query filter
    if (
      searchQuery !== "" &&
      !t.task.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  // Filter completed tasks based on search query
  const filteredCompletedTasks = completedTasks.filter((ct) => {
    // Search query filter
    if (
      searchQuery !== "" &&
      !ct.task.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <div className="task-form">
          <input
            type="text"
            id="task"
            placeholder="Enter task..."
            value={task}
            onChange={handleTaskChange}
          />
          <input
            type="text"
            id="task-description"
            placeholder="Enter task description..."
            value={taskDescription}
            onChange={handleTaskDescriptionChange}
          />
          <select
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
          />
          <button id="add-task" onClick={addTask}>
            {editMode ? "Update Task" : "Add Task"}
          </button>
        </div>
        <div className="filters">
          <input
            type="text"
            id="search"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <select
            id="priority-filter"
            value={priorityFilter}
            onChange={handlePriorityFilterChange}
          >
            <option value="all">All Priorities</option>
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <select
            id="completion-filter"
            value={completionFilter}
            onChange={handleCompletionFilterChange}
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <h2 className="heading">Upcoming Tasks</h2>
        <div className="task-list" id="task-list">
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((t) => (
                !t.done && ( // Render only if task is not done
                  <tr key={t.id}>
                    <td>{t.task}</td>
                    <td>{t.taskDescription}</td>
                    <td>{t.priority}</td>
                    <td>{t.deadline}</td>
                    <td>
                      <div>
                        <button
                          className="mark-done"
                          onClick={() => markDone(t.id)}
                        >
                          Mark Done
                        </button>
                        <button
                          className="edit-task"
                          onClick={() => editTask(t.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-task"
                          onClick={() => deleteTask(t.id, false)}
                        >
                          Delete
                        </button>
                        <button
                          className="move-to-overdue"
                          onClick={() => moveToOverdue(t.id)}
                        >
                          Overdue
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="heading">Overdue Tasks</h2>
        <div className="overdue-task-list" id="overdue-task-list">
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOverdueTasks.map((t) => (
                !t.done && ( // Render only if task is not done
                  <tr key={t.id}>
                    <td>{t.task}</td>
                    <td>{t.taskDescription}</td>
                    <td>{t.priority}</td>
                    <td>{t.deadline}</td>
                    <td>
                      <div>
                        <button
                          className="delete-task"
                          onClick={() => deleteOverdueTask(t.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
        <div className="completed-task-list">
          <h2 className="cheading">Completed Tasks</h2>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompletedTasks.map((ct) => (
                <tr key={ct.id}>
                  <td>{ct.task}</td>
                  <td>{ct.taskDescription}</td>
                  <td>{ct.priority}</td>
                  <td>{ct.deadline}</td>
                  <td>
                    <button
                      className="delete-task"
                      onClick={() => deleteTask(ct.id, true)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
