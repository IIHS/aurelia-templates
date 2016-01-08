import {inject} from "aurelia-framework";
import {DialogController} from 'aurelia-dialog'

@inject(DialogController)
export class $safeitemname$ {

    dialogController: DialogController;

    constructor(dialogController: DialogController) {
        this.dialogController = dialogController;
    }

    activate() {
    }

}