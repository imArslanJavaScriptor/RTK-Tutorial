import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/task/taskSlice";

function FilteredTask() {
  const filter = useSelector((state) => state.tasks.filters);
  const dispatch = useDispatch();
  console.log(filter);
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        text={"All"}
        cickEvent={() => dispatch(setFilter("all"))}
        seprateStyles={filter === "all" ? "btnBlack" : "btnBlue"}
      />
      <Button
        text={"Completed"}
        cickEvent={() => dispatch(setFilter("completed"))}
        seprateStyles={filter === "completed" ? "btnBlack" : "btnBlue"}
      />
    </div>
  );
}

export default FilteredTask;
