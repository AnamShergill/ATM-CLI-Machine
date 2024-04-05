#! /usr/bin/env node

import inquirer from "inquirer";
import ListPrompt from "inquirer/lib/prompts/list.js";

// Print welcome message
let greetingMessage="\n\t  'Welcome to your ATM'  \t\n";
console.log(greetingMessage);

let myBalance = 10000; //Dollar
let myPin = 2846;

let pinNumber = await inquirer.prompt(
    [
      {
        name:"pin",
        message:"Enter your Pin:",
        type:"number"
      }
    ]
);

    if (pinNumber.pin === myPin) {
        console.log("\n Correct pin code!!!\n")
        console.log("\t 'Please Proceed'\t")
      

 let operationAns = await inquirer.prompt(
    [
        { name : "action",
          message : "Select your option:",
          type :"list",
          choices :["Withdraw","Balance Inquiry"],
        }
    ]
    );


if(operationAns.action === "Withdraw"){
  let amountAns = await inquirer.prompt([
    { 
      name: "amount",
      type: "number",
      message: " Enter the amount you want to withdraw :",
    
    }
  ]); 
  
  if(amountAns.amount > myBalance) {
    console.log("Sorry!Insufficient Balance");
  } 
  else 
     { myBalance -= amountAns.amount;
        console.log(" Withdraw Successfully:", amountAns.amount);
        console.log("Your remaining Balance is", myBalance);
     };
    } else if (operationAns.action === "Balance Inquiry"){
      console.log("Your account Balance is :", myBalance);
    } }
    else {
      console.log("Pin is Incorrect, Try Again!");
    }