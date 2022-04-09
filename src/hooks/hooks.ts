import {useSelector, TypedUseSelectorHook} from 'react-redux'
import {ApiState} from "../store";

export const apiUseSelector: TypedUseSelectorHook<ApiState> = useSelector