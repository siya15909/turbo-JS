function vowels(a){
    a = a.toLowerCase();
    let count =0;
    for(i of a){
        if(i === 'a'||i==='e'||i==='i'||i==='o'||i==='u')
            count ++;
    }
    return count;
}
const arrowVowels = (a)=>{
    a = a.toLowerCase();
    let count =0;
    for(i of a){
        if(i === 'a'||i==='e'||i==='i'||i==='o'||i==='u')
            count ++;
    }
    return count;
}
console.log(vowels("BaapRe!!!!"));
console.log(arrowVowels("Mujheee BachaaaoooOOO!!!"));
