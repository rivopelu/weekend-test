import axios from "axios";
import {MASTER_URL} from "../constants/urlConstants";
import {createError, requestGet} from "../utils/utils";
import {DataSlice} from "./reducer";

const {actions: reducer} = DataSlice;

export const GetTestimonial = () => {
    return async (dispatch) => {
        dispatch(reducer.setTestimonial({loading: true, data: null}));

        await requestGet(MASTER_URL.getTestimonial)
            .then((res) => {
                dispatch(reducer.setTestimonial({loading: false, data: res.data}))
            })
            .catch((e) => {
                createError(e);
                dispatch(reducer.setTestimonial({loading: false, data: null}))

            })

    }
}

export const GetHelpAndTips = () => {
    return async (dispatch) => {
        dispatch(reducer.setHelpAndTips({loading: true, data: null}))
        await requestGet(MASTER_URL.getHelpAndTips)
            .then((res) => {
                dispatch(reducer.setHelpAndTips({loading: false, data: res.data}));
            })
            .catch((e) => {
                createError(e)
                dispatch(reducer.setHelpAndTips({loading: false, data: null}))

            })
    }
}