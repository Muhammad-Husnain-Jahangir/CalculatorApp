import addition from "./modules/Add.js";
import substraction from "./modules/Subtract.js";
import multiplication from "./modules/Multiply.js";
import division from "./modules/Divide.js";
import inquirer from "inquirer";
import chalk from 'chalk';
let calculator = await inquirer.prompt([
    {
        name: "Options",
        type: "list",
        choices: ["Add", "Subtract", "Multiply", "Divide"]
    },
    {
        name: "firstNumber",
        type: "number",
        message: "Enter first number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter second number"
    }
]);
const firstNumber = calculator.firstNumber;
const secondNumber = calculator.secondNumber;
if (calculator.Options == "Add") {
    console.log(chalk.bgGray(`${addition(firstNumber, secondNumber)}`));
}
else if (calculator.Options == "Subtract") {
    console.log(chalk.bgBlueBright(`${substraction(firstNumber, secondNumber)}`));
}
else if (calculator.Options == "Multiply") {
    console.log(chalk.greenBright(`${multiplication(firstNumber, secondNumber)}`));
}
else if (calculator.Options == "Divide") {
    console.log(chalk.cyanBright(`${division(firstNumber, secondNumber)}`));
}
else {
    console.log("Invalid");
}
