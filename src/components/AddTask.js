import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!desc) return;
    dispatch(addTask({ id: uuidv4(), description: desc, isDone: false }));
    setDesc("");
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;