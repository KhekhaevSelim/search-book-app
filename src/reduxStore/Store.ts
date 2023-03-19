import { combineReducers, createStore } from "redux";
import {searchReducer} from "../reducers/SearchReducer";

export const RootReducers = combineReducers({searchReducer: searchReducer})

const Store = createStore(RootReducers)

export type RootStateType = ReturnType<typeof RootReducers>

// @ts-ignore
window.store = Store
export default Store