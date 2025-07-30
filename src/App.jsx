import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 flex-col">
      <h1 className="text-4xl font-bold text-white">Task Manager App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
