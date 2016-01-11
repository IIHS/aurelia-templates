System.register(["aurelia-framework", 'aurelia-dialog'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_framework_1, aurelia_dialog_1;
    var $safeitemname$;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_dialog_1_1) {
                aurelia_dialog_1 = aurelia_dialog_1_1;
            }],
        execute: function() {
            $safeitemname$ = (function () {
                function $safeitemname$(dialogController) {
                    this.dialogController = dialogController;
                }
                $safeitemname$.prototype.activate = function () {
                };
                $safeitemname$ = __decorate([
                    aurelia_framework_1.inject(aurelia_dialog_1.DialogController)
                ], $safeitemname$);
                return $safeitemname$;
            })();
            exports_1("$safeitemname$", $safeitemname$);
        }
    }
});
