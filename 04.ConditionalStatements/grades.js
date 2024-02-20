let grade;
const mark = prompt("Enter your mark: ");
if(mark>=80&&mark<=100) grade = 'A'
else if(mark>=70&&mark<80) grade = 'B'
else if(mark>=60&&mark<70) grade = 'C'
else if(mark>=50&&mark<60) grade = 'D'
else if(mark>=40&&mark<50) grade = 'E'
else grade='F'
alert(`Your grade is ${grade}`);
//Try not to test with node