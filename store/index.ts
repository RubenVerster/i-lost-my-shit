import { action, createStore, createTypedHooks } from "easy-peasy";
import { Pages, IStoreModel } from "../types";

const typedHooks = createTypedHooks<IStoreModel>();

export const store = createStore<IStoreModel>({
  page: Pages.Home,
  setPage: action((state, payload) => {
    state.page = payload;
  }),
});

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
