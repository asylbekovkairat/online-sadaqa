import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./state.schema";
export function createReduxStore(initialState?: StateSchema) {
  initialState
  return configureStore<StateSchema>({
    reducer: {},
  });
}
