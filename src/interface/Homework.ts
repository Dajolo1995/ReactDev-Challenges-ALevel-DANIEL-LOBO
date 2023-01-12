export interface Homework {
  task: task[];
}

export interface task {
  id: number;
  description: String;
  finishDate: String;
  State: Boolean;
  label: String[];
}

export interface label {
  label: labelArray[];
}

export interface labelArray {
  id: number;
  name: String;
}
