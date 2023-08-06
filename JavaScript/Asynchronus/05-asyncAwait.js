// In this case we will will use an await inside an Async function
//

let stocks = {
    fruits: ["strawberry", "mango", "watermelon", "apple", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  let is_shop_open = true;
  
  let toppings_choice =()=>{ //Using this function to ask customer, what toppings they would like to add to the icecream
  
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(console.log("Which topping do you want!"));
      },3000)
    });
  };
  
  //In the kitchen function the preparatio of the icecream would be done
  async function kitchen () {
  console.log(" A ")
    console.log(" B ")
    console.log(" C ")
  
    //while we are working on the kitchen we realise we forget to ask customer what toppings they would like. So we are calling the await function
    await toppings_choice() //Using await toppings_choice() function we are going outside of the kitchen fucntion to ask customer toppings of their choices
    
    console.log(" D ")
    console.log(" E  ")
    
  }
  
  kitchen()
  

  //while, in the kitchen icecream preparation going on or not this👇 other task would be keep on going
  console.log("doing the dishes")
  console.log("cleaning the table")
  console.log("taking others orders")