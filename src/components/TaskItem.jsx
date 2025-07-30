import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteTask, toggleTask } from "../features/task/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  console.log(task);
  return (
    <div className="flex items-center justify-between w-[450px] p-2 bg-white my-2 rounded-[5px]">
      <p
        className={`text-lg font-medium ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </p>
      <div className="flex items-center gap-2">
        <Button
          text={task.completed ? "Undo" : "Done"}
          seprateStyles={"btnGreen"}
          cickEvent={() => dispatch(toggleTask(task.id))}
        />
        <Button
          text={"Delete"}
          seprateStyles={"btnBlack"}
          cickEvent={() => dispatch(deleteTask(task.id))}
        />
      </div>
    </div>
  );
}

export default TaskItem;
