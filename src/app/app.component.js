"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// import { DoService } from './Index';
// import { BusinessProvider } from './business/index';
// import { DoHttpService } from './services/index';
// import { ServiceContext } from 'angular-rules-engine/service/index';
// import { ServiceMessage } from 'angular-rules-engine/service/index';
// import { MessageType } from 'angular-rules-engine/service/index';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            template: "{{title}}",
            // providers: [ServiceContext, DoService, BusinessProvider, DoHttpService],
            styleUrls: ['app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
