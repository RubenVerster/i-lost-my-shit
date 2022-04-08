import { Action } from "easy-peasy";

export interface IStoreModel {
  adminPage: boolean;
  setAdminPage: Action<IStoreModel, boolean>;
}

export type adminPage = boolean;
