import { FC, useReducer } from "react";
import { LabelContext } from "./LabelContext";
import { LabelReducer } from "./LabelReducer";
import { label, labelArray } from "../../interface/Homework";
import labels from "../../db/label.json";
import { setLabels, getLabels, deleteLabels } from "../../utils/utils";
import Swal from "sweetalert2";
export interface taskStateInterfaz {
  data: label[];
}

interface propsChildren {
  children: JSX.Element | JSX.Element[];
}

import React from "react";

const LabelState: FC<propsChildren> = ({ children }) => {
  const dataBd = labels.data;

  //Initial State
  const labelInitialState: taskStateInterfaz = {
    data: [],
  };

  const [state, dispatch] = useReducer(LabelReducer, labelInitialState);

  const getLabel = () => {
    try {
      if (state.data.length === 0) {
        if (getLabels() === undefined || getLabels() === null) {
          setLabels(dataBd);
        }

        dispatch({
          type: "GET_LABEL",
          payload: getLabels(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createlabels = async (data) => {
    try {
      deleteLabels();
      dispatch({ type: "ADD_LABEL", payload: data });
      const saaveData = [data, ...state.data];

      setLabels(saaveData);

      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Etiqueta creada",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LabelContext.Provider
      value={{
        data: state.data,
        getLabel,
        createlabels,
      }}
    >
      {children}
    </LabelContext.Provider>
  );
};

export default LabelState;
