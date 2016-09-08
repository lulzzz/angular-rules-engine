import { Component } from '@angular/core';
import dCompare = require('typescript-dotnet-commonjs/System/Compare');
import Compare = dCompare;
import dCompareResult = require('typescript-dotnet-commonjs/System/CompareResult');
import CompareResult = dCompareResult.CompareResult;

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: `{{title}}`,
    // providers: [ServiceContext, DoService, BusinessProvider, DoHttpService],
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'app works!';
    result: boolean;
    compareResult: CompareResult;
    isTrue: boolean;

    constructor(){
        let a = 1;
        let b = 1;
        this.compareResult = Compare.compare(a, b, true);
        console.log('CompareResult: ' + this.compareResult); // expect 0 (Equal)
        this.isTrue = Compare.compare(a, b) === CompareResult.Equal
        console.log('IsTrue: ' + this.isTrue);

        let small = 1;
        let large = 10;
        this.compareResult = Compare.compare(small, large, true);
        console.log('CompareResult: ' + this.compareResult); //expect -1 (Less)
        this.isTrue = Compare.compare(small, large) === CompareResult.Less
        console.log('IsTrue: ' + this.isTrue);
        
        this.compareResult = Compare.compare(large, small, true);
        console.log('CompareResult: ' + this.compareResult); //expect 1 (Greater)
        this.isTrue = Compare.compare(large, small, true) === CompareResult.Greater;
        console.log('IsTrue: ' + this.isTrue);
    }
}
