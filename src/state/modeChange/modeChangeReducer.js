import { mode } from "../index";
import { ENABLE_LIST, ENABLE_CHART } from "./modeChangeAction"

export default (state = mode, action) => {
    if (action.type === ENABLE_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.isList = true;
        newState.isChart = false;
        return newState;
    }

    if (action.type === ENABLE_CHART) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.isList = false;
        newState.isChart = true;
        return newState;
    }
    return state;
}