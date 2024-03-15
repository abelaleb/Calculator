function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

function subtract(...numbers){
    return numbers.reduce((total, num) => total - num,0);
}
function multiply(...numbers){
    return numbers.reduce((total, num) => total * num,1);
}
function divide(...numbers){
    return numbers.reduce((total,num)=> total/num);
}
function plusMinus(number) {
    if (number >= 0) {
        return -Math.abs(number); 
    } else {
        return Math.abs(number); 
    }
}
function percentage(number){
    return number/100;
}
