console.log("guess the number between 1 to 10")

let a:number=Math.floor(Math.random()*10)
import inquirer from "inquirer"
while(true)
    {
        let input=await inquirer.prompt
        ({name:"guess", type:"number",
        message:"enter your guess number",})
    
    let ans:number=input.guess
    if(a==ans){
        console.log("Congratulation you have guessed correct number")
        break;}
        else{console.log("Try again")}
    }