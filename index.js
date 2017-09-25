const inquirer = require("inquirer")
const chalk = require('chalk')

console.log(chalk.green("Hello, I'm IO Your Pizza Generator!"))
console.log("Let me make some pizzas for you!")

let questions = [{

name: "number", 
message:"How many Pizzas should I make for you? ",

},{
name: "size",
type: "size", 
message:"What size Pizza's do you like? ",
choices:["S", "M", "L"],

},{

name: "toppings", 
message:"What toppings do you like? ",

},{

name: "cut", 
message:"How would you like me to cut your pizza? ",

}]

inquirer.prompt(questions).then(function({number, size, toppings, cut}){
console.log("Your Order is complete,") 
console.log("You Ordered " + number + " Pizza's")
console.log("Pizza Size Is " + size)
console.log("The topping(s) for your pizza " + toppings)
console.log("I will cut your pizza in the style of " + cut + " cut")
console.log("Thank you! Come Back To Moochies Pizza Soon!")
})


                                                                                                                               

