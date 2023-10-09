// function findOddSum(arr){
//     sum =0;
//    for(i=0; i < arr.length ; i++){
//     // const index =i;
//     let element = arr[i];
//     sum =sum + element
//     // console.log(element ,sum)
   

// }
// return sum;
// }
// var numbers = [12,56,78,43,22,67,22,55];
// console.log(findOddSum(numbers));



function getSum(numbers){

    sum = 0;
    for(i=0; i<numbers.length; i++){
       let number =numbers[i];
       sum = sum + number
    }
    return sum
}

 function getOddNumbers(oddNumbers){
     numberArr = [];
    for(i=0; i <oddNumbers.length; i++){
        let element = oddNumbers[i];
        console.log(element);
        if(element %2 !==0){
           numberArr.push(element)
        }
    }
    return numberArr;
 }
var getNumbers = [23,56,75,75,74,63,67,22,66];
var getOddArray = getOddNumbers(getNumbers);
console.log(getOddArray)
var oddSum = getSum(getOddArray);
console.log(oddSum);


