"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emp = /** @class */ (function () {
    // Initialization D M
    function Emp(empid, empname) {
        //  let empid:number =20
        this.empid = empid;
        this.empname = empname;
    }
    return Emp;
}());
// Simplified version - declare and initialize data member
var Employee = /** @class */ (function () {
    function Employee(eid, ename) {
        this.eid = eid;
        this.ename = ename;
    }
    return Employee;
}());
exports.Employee = Employee;
function display() {
    console.log("display function");
}
exports.display = display;
