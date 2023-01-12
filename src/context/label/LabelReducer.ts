import { label } from "../../interface/Homework";

type ProductActionType =
  | { type: "UPDATE_LABEL"; payload: label[] }
  | { type: "ADD_LABEL"; payload: label[] }
  | { type: "GET_LABEL"; payload: label[] }
  | { type: "GET_LABEL_ID"; payload: label[] };

export const LabelReducer = (state: any, action: ProductActionType): any => {
  switch (action.type) {
    case "GET_LABEL":
      return {
        ...state,
        data: action.payload,
        dataId: [],
      };

    case "ADD_LABEL":
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    case "GET_LABEL_ID":
      return {
        ...state,
        dataId: action.payload,
      };

    case "UPDATE_LABEL":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
