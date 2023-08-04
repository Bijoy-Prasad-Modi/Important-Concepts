//in this case we will create ice cream ordering system using Async-await

let stocks = {
    fruits: ["strawberry", "mango", "watermelon", "apple", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  
  let is_shop_open = true;
  
  function time(ms){
    return new Promise((resolve, reject)=>{
      if(is_shop_open){
        setTimeout(resolve,ms)
      }
      else{
        reject(console.log("shop is closed"));
      }
    });
  }
  
  async function kitchen (){
    try{
      await time(2000)
      console.log(`${stocks.fruits[0]}`)
     
      await time(0)
      console.log("\n start the production")
  
       await time(2000)
      console.log("\n cut the fruit")
  
       await time(1000)
      console.log(`\n ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
  
       await time(1000)
      console.log("\n start the machine")
  
       await time(2000)
      console.log(`\n ice cream placed on ${stocks.holder[0]}`)
  
       await time(3000)
      console.log(`\n ${stocks.toppings[0]} was selected`)
    }
      
    catch(error){"customer left",error}
  
      
    finally{
  
      await time(4000)
      console.log("\n day ended, shop is closed")
    }
  }
  
  kitchen();
  