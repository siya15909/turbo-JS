//LOGICAL OPERATIONS
a = 5;
b = 4;
console.log("Cond1","\t","Cond2\t","AND\t","OR\t");//AND , OR
console.log(a>=b,"\t",a<=b,"\t",a>=b && a<=b,"\t",a>=b || a<=b,"\t");
console.log(a===b,"\t",a!==b,"\t",a===b && a!==b,"\t",a===b || a!==b,"\t");
console.log(a!==b,"\t",a===b,"\t",a!==b && a===b,"\t",a!==b || a===b,"\t");
console.log(a>b,"\t",a<b,"\t",a>b && a<b,"\t",a>b || a<b,"\t");
console.log("Cond1\t","NOT\t") //NOT OPERATION
console.log(a>=b,"\t",!(a>=b),"\t");
console.log(a<=b,"\t",!(a<=b),"\t");