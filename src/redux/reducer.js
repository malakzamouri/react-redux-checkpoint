import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK } from "./actions";

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        )
      };
    default:
      return state;
  }
};

export default reducer;