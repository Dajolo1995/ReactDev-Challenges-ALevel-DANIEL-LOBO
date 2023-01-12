import { Homework } from "../interface/Homework";

export const setTask = (task) => {
  localStorage.setItem("task", JSON.stringify(task));
};

export const getTasks = () => {
  const data: string | null = localStorage.getItem("task");
  return JSON.parse(data);
};

export const setLabels = (label) => {
  localStorage.setItem("label", JSON.stringify(label));
};

export const getLabels = () => {
  const data: string | null = localStorage.getItem("label");
  return JSON.parse(data);
};

export const deleteLabels = () => {
  localStorage.removeItem("label");
};

export const idTask = (data: number) => {
  localStorage.setItem("id", `${data}`);
};

export const getIdTask: any = () => {
  return localStorage.getItem("id");
};

export const idTaskId = (data) => {
  console.log(data);

  localStorage.setItem("taskId", JSON.stringify(data));
};

export const getIdTaskId: any = () => {
  const data: string | null = localStorage.getItem("taskId");
  return JSON.parse(data);
};

export const deleteTask = () => {
  localStorage.removeItem("taskId");
  localStorage.removeItem("id");
};
