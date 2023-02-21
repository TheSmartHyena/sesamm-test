import { ReducerActionList } from "../reducer/actionList";

export interface IReducerAction {
    type: ReducerActionList;
    payload: object;
}