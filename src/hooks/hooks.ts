import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import {ApiState} from "../store";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action-creator/index'

export const useApiDispatch = () => {
    const dispatch = useDispatch()
    //swizywanie action creater
    console.log(ActionCreators)
    return bindActionCreators(ActionCreators, dispatch)
};

export const apiUseSelector: TypedUseSelectorHook<ApiState> = useSelector