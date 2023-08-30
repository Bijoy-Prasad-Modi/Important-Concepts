//Definition : Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variables

//case -1 :
// let arr = [3,5]
// let [a,b] = arr;
// console.log(a,b);
//we don't need to do this 
//let a = arr[0]
//let b = arr[1]


//case-2:
//Now if we do something like this 
// let arr = [3,5,8]
// let [a,b,c,d] = arr
// console.log(a,b,c,d) //as d value will not initializ, so it will print nothing

//case-3:
//But if we do
// let arr = [3,5,8,11,13,7]
// let [a,b,c,d] = arr
// console.log(a,b,c,d) //in this case all the value (a,b,c,d) will be print. arr value 13 & 7 will be ignored

//case-4 :
// let arr = [3,5,8,11,13,7]
// let [a,b,c,d,...rest] = arr
// console.log(a,b,c,d,rest) //in this case a,b,c,d will take consecutive values from array & the remaining element will be sotre in an array

//case-5 :
let arr = [3,5,8,11,13,7]
let [a,,b,...rest] = arr
console.log(a,,b,rest)// in this syntax b skip taking element 5 & will print 8 and the rest of the element will come under an array