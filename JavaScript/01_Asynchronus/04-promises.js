//In this case we will gonna create the icecream ordering system using promises
let stocks = {
    fruits: ["strawberry", "mango", "watermelon", "apple", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  let is_shop_open = false;
  
  
  //Relation between time and work
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work());
        }, time);
      }
      else {
        reject(console.log("our shop is closed")); 
      }
    });
  };
  
  order(2000, () => console.log(`${stocks.fruits[1]} was selected`))
  
  
    //promise chaining
  
    .then(() =>  order(0, () => console.log("production has started")))
    
  
    .then(() => order(2000, () => console.log("the fruit was chopped")))
  
    //*** You can not have semicolon between then
  
    .then(() => order(0, () => console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} is being added`)))
    
  
    .then(() => order(1000, () => console.log("start the machine")))
    
  
  .then(() => order(2000, () => {
      console.log(`ice cream placed on ${stocks.holder[0]}`);
      return order(3000, () => {
        console.log(`${stocks.toppings[0]} was selected`);
        return order(1000, () => console.log("The ice cream was served"));
      });
        
    }))
  
  .catch(()=>{
    console.log("customer left")
  })
  
  .finally (()=>{
    console.log("Day ended shop is closed")
  });