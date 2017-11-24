import {
    SAVE_CODE, SAVE_CODE_SUCCESS, SAVE_CODE_FAILURE,
    GET_CODE, GET_CODE_SUCCESS, GET_CODE_FAILURE,
} from '../constants'
const initialState = {
    code: {},
    isLoading: false,
    isError: false,
    error: "",
}

export default function CodeReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_CODE:
            return {
                ...state,
                code: "",
                isLoading: true,
                isError: false,
                error: "",
            }
        case SAVE_CODE_SUCCESS:
            return {
                ...state,
                code: action.payload,
                isLoading: false, 
            }
        case SAVE_CODE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
            case GET_CODE:
            return {
                ...state,
                code: "",
                isLoading: true,
                isError: false,
                error: "",
            }
        case GET_CODE_SUCCESS:
            return {
                ...state,
                code: action.payload,
                isLoading: false, 
            }
        case GET_CODE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
        default:
            return state
    }
}