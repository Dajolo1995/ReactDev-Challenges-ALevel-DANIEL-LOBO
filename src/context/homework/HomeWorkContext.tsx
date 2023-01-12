import { createContext } from "react";
import { Homework } from "../../interface/Homework";

interface ContextProps {
  data: Homework[];
  dataId: any
  getTask: () => void;
  createTask: (data: any) => void
  getTaskId: (value: number) => void
  updateTask: (data: any) => void
  deleteTasks: (data: any) => void

}

export const HomeworkContext = createContext({} as ContextProps);
