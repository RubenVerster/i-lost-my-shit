import { Action } from "easy-peasy";

export interface IStoreModel {
  adminPage: boolean;
  setAdminPage: Action<IStoreModel, boolean>;
}

export type adminPage = boolean;

export interface IEntry {
  title: string;
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
  setAuth: (auth: boolean) => void;
  auth: boolean;
}
