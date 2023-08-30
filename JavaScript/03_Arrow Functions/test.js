// Case :1
//const sayHello = (name) => {
//   console.log('Hello ' + name);
// }
// sayHello('Bijoy');

// Case :2
//const sayHello = (name) => 
//   console.log('Hello ' + name);
// sayHello('Bijoy');

// Case :3
//const sayHello = name => 
//   console.log('Hello ' + name);
// sayHello('Bijoy');

// case :4
// const sayHello =( name, greeting) =>
// console.log(greeting + ' ' + name);
// sayHello('Bijoy','Good Morning!');

//case : 5
// const x = {
// name : 'Bijoy',
//   role : 'Js Developer',
//   exp : 20,}
// console.log('The name is '+x.name+' The role is '+x.role);




//case : 6
// const x = {
// name : 'Bijoy',
//   role : 'Js Developer',
//   exp : 20,
//   show : function(){
//     console.log(`The name is ${this.name}\nThe role is ${this.role}`)
//   }
// }
//   x.show()

//case  : 7
// const x = {
// name : 'Bijoy',
//   role : 'Js Developer',
//   exp : 20,
//   show : function(){
//     console.log(`The name is ${this.name}\nThe role is ${this.role}`)
//   }
// }
//   x.show()

//case : 8
// const x = {
// name : 'Bijoy',
//   role : 'Js Developer',
//   exp : 20,
//   show : function(){ //here in the parent function this is obeject itself,to Pass it to the child function we have to assign it to the variable then we can pass it to the function nested inside 
//     let that = this;  //pass the this to a variable, here it it 'that', it is the old trick that is used to be used before
//    // console.log(this)
//     setTimeout(function()
//       {console.log(`The name is ${that.name}\nThe role is ${that.role}`)},2000)
//   }
// }
//   x.show()

//case : 9
const x = {
    name : 'Bijoy',
      role : 'Js Developer',
      exp : 20,
      show : function(){
        //let that = this;
       // console.log(this)
        setTimeout(()=>  //But incase of we don't have assign the 'this' to a variable to pass it into the nested/child function, as arrow function automatically take and assign the 'this' to the nested function (Arrow function take this from it's lexical parent and it called lexical this) 
          {console.log(`The name is ${this.name}\nThe role is ${this.role}`)},2000)
      }
    }
      x.show()