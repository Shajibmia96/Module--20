function leapYear(year){
    const remainder =year%4;
    if(remainder == 0){
        return  year,"Is a leap year"
    } else{
        return  year,"Is not a leap year"
    }
}
const givenData = 2050;
console.log(leapYear(givenData));