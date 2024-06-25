#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright.bold.italic("\t\t\n\t\t=== Countdown Timer ===\t\t\t\t\n"));


import {differenceInSeconds} from "date-fns";

///////////////function for count down
function* CountdownTimer(second: number){
    while(second > 0){
        yield second;
        second--;
    }
}

////step 2 counter initialization
let TimerIterator = CountdownTimer(10);

///func to create a CDT
function displayCountdown(){
    let result = TimerIterator.next();

    ///if else condition apply

    if (!result.done){

        ///current date and time
        const now = new Date();

        const CountdownTimer = new Date(now.getTime() + (result.value * 1000))
        
//// remaining sec in time

const remainingSeconds = differenceInSeconds(CountdownTimer , now)
console.log (`Remaining Seconds: ${remainingSeconds}`)

setTimeout(displayCountdown, 1000)

    }else{
        console.log(chalk.yellow.bold("\t\t\n\t\t===  Countdown Complete! ===\t\t\t\t\n"));
    }
}

//invoke
displayCountdown();