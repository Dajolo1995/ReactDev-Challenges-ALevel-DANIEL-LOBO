import { createContext } from "react";
import { label } from "../../interface/Homework";

interface ContextProps {
  data: label[];
  getLabel: () => void;
  createlabels: (data: any) => void
}

export const LabelContext = createContext({} as ContextProps);
