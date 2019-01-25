class Emp {
   // Declaring Data Menbers
    empid:number
    public empname : string 
    // Initialization D M
    constructor( empid:number, empname:string){
       //  let empid:number =20
        this.empid = empid
        this.empname = empname

    }
}

// Simplified version - declare and initialize data member

export class Employee{
    constructor(public eid:number, public ename:string){}
}

export function display(){
    console.log("display function");
}
