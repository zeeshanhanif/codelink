import {
    SAVE_CODE, SAVE_CODE_SUCCESS, SAVE_CODE_FAILURE,
    GET_CODE, GET_CODE_SUCCESS, GET_CODE_FAILURE,
} from '../constants'

export default class CodeActions {

    static SaveCode(data) {
        return {
            type: SAVE_CODE,
            payload: data
        }
    }

    static SaveCodeSuccess(data) {
        return {
            type: SAVE_CODE_SUCCESS,
            payload: data
        }
    }

    static SaveCodeFailure(error) {
        return {
            type: SAVE_CODE_FAILURE,
            error: error
        }
    }

    static GetCode() {
        return {
            type: GET_CODE,
        }
    }

    static GetCodeSuccess(data) {
        return {
            type: GET_CODE_SUCCESS,
            payload: data
        }
    }

    static GetCodeFailure(error) {
        return {
            type: GET_CODE_FAILURE,
            error: error
        }
    }
}