import { FC, useReducer } from "react";
import { HomeworkContext } from "./HomeWorkContext";
import { HomeworkReducer } from "./HomeWorkReducer";
import { Homework } from "../../interface/Homework";
import HomeWork from "../../db/homework.json";
import {
  setTask,
  getTasks,
  getIdTaskId,
  idTaskId,
  getIdTask,
  deleteTask,
} from "../../utils/utils";
import Swal from "sweetalert2";
import { genComponentStyleHook } from "antd/es/theme/internal";

export interface taskStateInterfaz {
  data: Homework[];
  dataId: object;
}

interface propsChildren {
  children: JSX.Element | JSX.Element[];
}

const HomeWorkState: FC<propsChildren> = ({ children }) => {
  const dataBd = HomeWork.data;

  //Initial State
  const taskInitialState: taskStateInterfaz = {
    data: [],
    dataId: {},
  };
  //Initial reducer
  const [state, dispatch] = useReducer(HomeworkReducer, taskInitialState);

  //getData Task
  const getTask = () => {
    try {
      deleteTask();
      if (state.data.length === 0) {
        if (getTasks() === undefined || getTasks() === null) {
          setTask(dataBd);
        }
        dispatch({
          type: "GET_TASK",
          payload: getTasks(),
        });
      }
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Se ha cargado los datos",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = (data) => {
    try {
      dispatch({ type: "ADD_TASK", payload: data });
      const saaveData = [data, ...state.data];

      setTask(saaveData);

      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Tarea creada",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTaskId = (value: any) => {
    try {
      if (getIdTaskId() === undefined || getIdTaskId() === null) {
        const dataFilters = getTasks().filter((f) => f.id === parseInt(value));
    
        idTaskId(dataFilters);

        dispatch({
          type: "GET_TASK_ID",
          payload: dataFilters[0],
        });
      } else {
        const dataFilters = getIdTaskId()[0];
        dispatch({
          type: "GET_TASK_ID",
          payload: dataFilters,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = (data) => {
    try {
      deleteTask();

      const dataFilters = state.data.filter((f) => f.id !== data.id);
      const saaveData = [data, ...dataFilters];



      dispatch({ type: "UPDATE_TASK", payload: saaveData });

      setTask(saaveData);

      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Tarea actualizada!!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTasks = (data) => {
    try {
      deleteTask();
      const dataFilters = state.data.filter((f) => f.id !== data);

      dispatch({ type: "UPDATE_TASK", payload: dataFilters });

      setTask(dataFilters);

      getTask();

      Swal.fire({
        icon: "warning",
        title: "Eliminada",
        text: "Tarea Eliminada!!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeworkContext.Provider
      value={{
        data: state.data,
        dataId: state.dataId,
        getTask,
        createTask,
        getTaskId,
        updateTask,
        deleteTasks,
      }}
    >
      {children}
    </HomeworkContext.Provider>
  );
};

export default HomeWorkState;
