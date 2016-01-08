import {bindable, bindingMode} from 'aurelia-framework';

export class $safeitemname$ {

    @bindable({
        attribute: "text",
        defaultBindingMode: bindingMode.oneWay
    }) text: string = "";

    constructor() {
    }

    activate() {
    }

}