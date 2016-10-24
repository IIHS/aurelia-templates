import {autoinject} from "aurelia-framework";
import {HttpClient} from 'aurelia-http-client';

@autoinject
export class $safeitemname$ {

    rootUrl = "/api/root";
    vm;

    constructor(private http: HttpClient) {
    }

    activate() {
        return this.loadData();
    }

    loadData() {
        return this.http(`${this.rootUrl}/get-data`)
            .then((response) => {
                this.vm = response.content;
            });
    }

    attached() {
    }
}