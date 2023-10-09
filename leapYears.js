function getLeapYearArray(arr){
      result = [];

     for(let i=0; i<arr.length; i++){
        var element = arr[i]
        if(element %4 == 0 && element %100 !=0 || element % 400==0){
        result.push(element)
            
        }
     }
     return result
}
const numbers= [2023, 2024,2025.2028,2029,2032];
console.log(getLeapYearArray(numbers));