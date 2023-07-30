//So in callback method we called a function inside another function as a parameter
//suppose we have a function called first and inside this function we have another function called second 
//let's form a relationship between them using callback method
function frist(call_second) {
    console.log("function first being called. now it will call the second function");
    call_second();
  }
  
  function second() {
    console.log("function second being called");
  }
  
  frist(second);