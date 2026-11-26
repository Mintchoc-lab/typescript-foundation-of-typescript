function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here

   const  selectedEvenNumbers = numbers.filter(function (num){
        return num % 2 === 0;
      });
   
   const SumEvenNum = selectedEvenNumbers.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
      return SumEvenNum;

}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0

