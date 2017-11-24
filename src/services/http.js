import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class HttpService {
    //Get request HTTP service
    static get(url, headers = {}) {
        return Observable.ajax({
            url,
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    //Post request HTTP service
    static post(url, body, headers = { 'Content-Type': 'application/json' }) {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }

    static saveLocalStorage(key, payload) {
        return Observable.fromPromise(new Promise((resolve, reject) => {
            let jsonData = JSON.stringify(payload)
            localStorage.setItem(key, jsonData);
            resolve(jsonData);
        }));
    }

    static getLocalStorage(key, payload) {

        return Observable.fromPromise(new Promise((resolve, reject) => {
            if (localStorage.getItem(key)) {
                let jsonData = localStorage.getItem(key);
                resolve(jsonData);
            }
            else reject(false);
        }));
    }
}