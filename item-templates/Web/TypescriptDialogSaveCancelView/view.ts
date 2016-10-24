import {autoinject} from "aurelia-framework";
import {DialogController} from 'aurelia-dialog'
import {HttpClient} from 'aurelia-http-client';

@autoinject
export class $safeitemname$ {
    
    constructor(private controller: DialogController, private http:HttpClient) {        
    }

    activate() {
    }

    save() {
    }

    cancel() {
    }
}