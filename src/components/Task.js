import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: newDesc }));
    setEditing(false);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      {editing ? (
        <>
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.isDone ? "line-through" : "none",
              marginRight: "10px"
            }}
          >
            {task.description}
          </span>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.isDone ? "Undo" : "Done"}
          </button>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;