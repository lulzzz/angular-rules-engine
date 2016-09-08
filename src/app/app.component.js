"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var dCompare = require('typescript-dotnet-commonjs/System/Compare');
var Compare = dCompare;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        var a = 1;
        var b = 1;
        this.compareResult = Compare.compare(a, b, true);
        console.log('CompareResult: ' + this.compareResult); // expect 0 (Equal)
        this.isTrue = Compare.compare(a, b) === 0 /* Equal */;
        console.log('IsTrue: ' + this.isTrue);
        var small = 1;
        var large = 10;
        this.compareResult = Compare.compare(small, large, true);
        console.log('CompareResult: ' + this.compareResult); //expect -1 (Less)
        this.isTrue = Compare.compare(small, large) === -1 /* Less */;
        console.log('IsTrue: ' + this.isTrue);
        this.compareResult = Compare.compare(large, small, true);
        console.log('CompareResult: ' + this.compareResult); //expect 1 (Greater)
        this.isTrue = Compare.compare(large, small, true) === 1 /* Greater */;
        console.log('IsTrue: ' + this.isTrue);
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
