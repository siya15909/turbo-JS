let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
//remove first company
console.log("The deleted element is ",companies.shift());
//replace Uber with Ola
companies.splice(1,1,'Ola');
console.log("After replacement, companies are : ",companies.toString());
//Add amazon at the end
companies.push('Amazon');
console.log("After addition, companies are : ",companies.toString());