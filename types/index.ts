import { Action } from "easy-peasy";

export interface IStoreModel {
  page: Pages.Home | Pages.Admin;
  setPage: Action<IStoreModel, Pages>;
}

export enum Pages {
  Home = "home",
  Admin = "admin",
}
