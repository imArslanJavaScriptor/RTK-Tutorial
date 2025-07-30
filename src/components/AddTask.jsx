import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 my-5">
      <input
        type="text"
        className="border-none outline-none rounded-[4px] px-4 py-2.5 backdrop-blur-[20px] bg-white/60 min-w-[300px] font-medium text-sm"
        value={text}
        placeholder="Add Task"
        onChange={(e) => setText(e.target.value)}
      />
      <Button text={"Add Task"} seprateStyles={"btnBlue"} isSubmit={true} />
    </form>
  );
}

export default AddTask;
