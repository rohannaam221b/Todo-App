let baseSalary = 20000;
let overTime=18;
let rate=2;
function getWage(baseSalary,overTime,rate){
    return baseSalary + (overTime * rate);
}

let employee ={
    baseSalary: 30000,
    overTime: 18,
    rate:2,
    getWage:function(){
        return this.baseSalary + (this.overTime * this.rate);
    }
}
console.log(employee);