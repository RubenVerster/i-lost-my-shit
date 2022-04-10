import { Dispatch, SetStateAction } from "react";

export interface IEntry {
  name: string;
  date: string;
  level: string;
  id: number;
}

export enum Level {
  Low = "low",
  Medium = "med",
  High = "high",
}

export interface IFooter {
  logout: () => void;
  auth: boolean;
}

export interface ISetAuth {
  setAuth: Dispatch<SetStateAction<boolean>>;
}
