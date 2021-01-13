'use strict'


const countTotalSalary = function (employees) {
   const sumes = Object.values(employees);

   let totalAmount = 0;

   for (const sume of sumes) {
      totalAmount += sume;
   }
   return totalAmount;

};

console.log(countTotalSalary({})); 

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); 

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);