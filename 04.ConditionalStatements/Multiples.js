const num = prompt('Enter the number : ');
const N = prompt('Enter the number to check: ');
if(num%N==0) console.log(`${num} is a multiple of ${N}`);
else console.log(`${num} is not a multiple of ${N}`);
//Try not to test with node