sayHi()
function sayHi() {
 console.log("Hello")
}//this will worksayHello()


let sayHello = () => {
 console.log("hello")
}//this will not work


function filter(numbers) {
    let results = [];
    for (const number of numbers) {
      if (number % 2 != 0) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  console.log(filter(numbers));

  