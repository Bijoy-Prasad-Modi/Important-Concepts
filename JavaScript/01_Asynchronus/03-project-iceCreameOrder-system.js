//In this project we will create a system to order ice cream.
//We will use setTimeout() to simulate the time it takes to make the ice cream. This function accepts two arguments: a callback function and a delay in milliseconds.
//the flow will be like : first we gonna take order from the customer, then we will fetch the ingredients, then we gonna start the production, then we will serve the ice cream to the customer
//we gonna create two functions one is "order function" to takeOrder and another is "production function" to processOrder

//we need stock to start the production, so we gonna create a variable called "stock" and set it to true
let stock = {
    fruits : ["starwberry","blueberry","cherry","apple","grapes"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]    
};

let order = (fruits_name, call_production) => { //we form a relationship between this two functions using callback method
//console.log("customer : I want an ice cream"); //order placed by customer
setTimeout(()=>{
    console.log(`${stock.fruits[fruits_name]} was selected`);
     
    call_production();
},3000); //we gonna take 3 seconds to fetch the ingredients from the stock

}

let production =() => {
    setTimeout(()=>{
        console.log("production : started"); //we gonna start the production

        setTimeout(()=>{
            console.log(`the fruit has been choped`); //we gonna chop the fruit

            setTimeout(()=>{
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`); //we gonna add water and ice

                setTimeout(()=>{
                    console.log("the machine was started"); //we gonna start the machine

                    setTimeout(()=>{
                        console.log(`ice cream was placed on ${stock.holder[1]}`); //we gonna place the ice cream on the holder

                        setTimeout(()=>{
                            console.log(`${stock.toppings[0]} was added as toppings`); //we gonna add toppings

                            setTimeout(()=>{
                                console.log("serve ice cream to customer");//we gonna serve the ice cream to the customer
                            },3000); //we gonna take 3 seconds to serve the ice cream to the customer
                        },2000); //we gonna take 2 seconds to add toppings
                    },2000); //we gonna take 2 seconds to place the ice cream on the holder
                },1000); //we gonna take 1 seconds to start the machine
            },2000); //we gonna take 2 seconds to add water and ice
        },2000); //we gonna take 2 seconds to chop the fruit
    },0o0); //we gonna take 0 seconds to start the production

}

order(0,production); //we call the order function and pass the production function as a parameter
