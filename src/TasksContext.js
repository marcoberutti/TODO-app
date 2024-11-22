import { createContext, useReducer } from "react";
import TasksReducer from "./taskReducer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

let initialData = JSON.parse(localStorage.getItem('tasks')) || []

function TasksProvider({children}){
  const [tasks, dispatch] = useReducer(TasksReducer, initialData)
  
  return(
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  )
}

export default TasksProvider