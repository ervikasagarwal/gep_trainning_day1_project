"use strict";
// consol.log("this.is test file"); highlights console
// not allowing duplicate var in project
//cannnt be executable by brnpm owser
Object.defineProperty(exports, "__esModule", { value: true });
// type annotation - explicit declaration
var x;
function sum(a, b) {
    return a + b;
}
// console.log(sum()); // error not allow without args 
// console.log(1, "vikas"); // error 
console.log(sum(1, 4));
//Implicit Declaration - type Interfence
var y = 50;
function sum2(a, b) {
    console.log(a + b);
    return 10;
}
var oopdemo_1 = require("./oopdemo");
var e1 = new oopdemo_1.Employee(22, "vikas");
console.log("emp age" + e1.eid + " emp name" + e1.ename);
oopdemo_1.display();
// webpack and system js to bundling and module loading
