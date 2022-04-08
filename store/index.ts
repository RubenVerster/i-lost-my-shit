import { action, createStore, createTypedHooks } from "easy-peasy";
import { IStoreModel } from "../types";

const typedHooks = createTypedHooks<IStoreModel>();

export const store = createStore<IStoreModel>({
  adminPage: false,
  setAdminPage: action((state) => {
    state.adminPage = !state.adminPage;
    console.log("setAdminPage", state.adminPage);
  }),
});

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
