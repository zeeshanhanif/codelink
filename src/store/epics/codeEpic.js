import {
    SAVE_CODE, SAVE_CODE_SUCCESS, SAVE_CODE_FAILURE,
    GET_CODE, GET_CODE_SUCCESS, GET_CODE_FAILURE,
} from '../constants'
import 'rxjs';
import { Observable } from 'rxjs';
import { HttpService } from './../../services/http';

//** Epic Middlewares For Auth **//
export default class CodeEpic {

    //Epic middleware for save code
    static saveCodeEpic = (action$) =>
        action$.ofType(SAVE_CODE)
            .switchMap(({ payload }) => {
                return HttpService.saveLocalStorage("user_code", payload)
                    .switchMap( response => {
                        if (response) {
                            let cleanCode = response.replace(/[\n,\t]/g,"");
                            let codeObj = {
                                orgCode: JSON.stringify(response),
                                cleanCode: cleanCode
                            }
                            return Observable.of({
                                type: SAVE_CODE_SUCCESS,
                                payload: codeObj

                            });
                        }
                        return Observable.of({
                            type: SAVE_CODE_FAILURE,
                            payload: "Unable to save code! Try Again "
                        });
                    });
            })

    //Epic middleware for get code
    static getCodeEpic = (action$) =>
        action$.ofType(GET_CODE)
            .switchMap(({ payload }) => {
                return HttpService.getLocalStorage("user_code")
                    .switchMap( response => {
                        console.log(response);
                        if (!response) {
                            return Observable.of({
                                type: GET_CODE_FAILURE,
                                payload: "There is no code available"
                            });
                        }
                        return Observable.of({
                            type: GET_CODE_SUCCESS,
                            payload: response
                        });
                    });
            })
}