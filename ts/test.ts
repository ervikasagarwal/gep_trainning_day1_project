


// consol.log("this.is test file"); highlights console
// not allowing duplicate var in project
//cannnt be executable by brnpm owser


// type annotation - explicit declaration
let x: number;

function sum(a: number , b:number) : number{
    return a+b;
}

// console.log(sum()); // error not allow without args 
// console.log(1, "vikas"); // error 
console.log(sum(1,4));

//Implicit Declaration - type Interfence
let y= 50;

function sum2(a:number, b:number){   // return type is void
    console.log(a+b);
    return 10;
}


import { Employee, display } from './oopdemo';

let e1 = new Employee(22, "vikas");

console.log("emp age"+ e1.eid+" emp name"+e1.ename);
display();
// webpack and system js to bundling and module loading