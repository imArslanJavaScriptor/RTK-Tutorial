import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import FilteredTask from "./FilteredTask";

function TaskList() {
  const { items, filters } = useSelector((state) => state.tasks);
  const filtered =
    filters === "completed" ? items.filter((task) => task.completed) : items;
  // console.log(items);
  return (
    <ul className="h-[400px] overflow-auto px-4">
      <FilteredTask />
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
