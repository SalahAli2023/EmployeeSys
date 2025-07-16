// class Employee{
//     constructor(fullName,monthSalary,main,sub){
//         this.fullName=fullName;
//         this.monthSalary=monthSalary;
//         this.department.main=main;
//         this.department.sub=sub;
//     }
    
//     calculateAnnualSalary(){
//         return this.monthSalary*12;
//     }
// }


const employee1 = {
    fullName: "",
    salary: 0.0,

    //Object department
    department:{
            main:"",
            sub:""
        },

    //Method to add info to emp
    setEmployeeInfo:function(fullName,salary,mainDepartment,subDepartment){
        this.fullName=fullName;
        this.salary=salary;
        this.department.main=mainDepartment;
        this.department.sub=subDepartment;
    },

    //function to calculate annual salary
    calcAnnualSalary:function () {
        return this.salary*12
    }
};

//Object2
const employee2 = {
    fullName: "",
    salary: 0.0,
    department:{
            main:"",
            sub:""
        },

    //Method to add info to emp
    setEmployeeInfo:function(fullName,salary,mainDepartment,subDepartment){
        this.fullName=fullName;
        this.salary=salary;
        this.department.main=mainDepartment;
        this.department.sub=subDepartment;
    },

    //function to calculate annual salary
    calcAnnualSalary:function () {
        return this.salary*12
    }
};

// Add Info to employees objects
employee1.setEmployeeInfo("Ali Saber", 8000, "It","developer");
employee2.setEmployeeInfo("Sara Ahmed", 10000,"HR", "recruitment");

// Function Add bonus to employee
function addBonus(bonusPercentage){
    const annualSalary=this.calcAnnualSalary();
    const bonus = annualSalary * bonusPercentage 
    const total = annualSalary + bonus
    return total;
}

// Function Add bonus & tip to employee
function addBonusAndTip(bonusPercentage,tip){
    const annualSalary=this.calcAnnualSalary();
    const bonus  = annualSalary * bonusPercentage 
    const total = annualSalary + bonus + tip
    return total;
}

// Function to print employee info
function printEmployeeInfo() {
    console.log(`Employee: ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
    console.log(`Have salary of: ${this.salary}`);
    console.log(`and Annual Salary of: ${this.calcAnnualSalary()}`);
}

//Add bonus to employee1 using call
addBonus.call(employee1, 0.5);

//Add bonus & tip to employee2 using apply
const totalBonusAndTipOfEmployee2= addBonusAndTip.apply(employee2, [0.5, 20000]);

// show employee1 info using bind
const printInfo=printEmployeeInfo.bind(employee1);
printInfo()

// nested destructuring for the employee2 data & print it
const {fullName, department:{main,sub}, salary}=employee2;

console.log(`Employee: ${fullName} work in department of: ${main} as a ${sub}`);
console.log(`Have salary of: ${salary}`);
console.log(`and Annual Salary of: ${totalBonusAndTipOfEmployee2}`);




