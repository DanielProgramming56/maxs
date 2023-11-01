import { countAction } from "../reducer/countReducer";
export const countChange = (type) => (dispatch, getState) => {
    const {count} = getState()

    if (type === 'INCREACE')
    {
        dispatch(countAction.setCount(count.number + 1))
    }else {
        dispatch(countAction.setCount(count.number - 1))
    }
}