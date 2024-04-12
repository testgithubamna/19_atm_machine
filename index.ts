import inquirer from "inquirer";
const myBalance = 25000;
const myPin = 1234;

const atm = await inquirer.prompt(
    { message:"Enter your pincode",
      type:"number",
      name:"pincode"

},)

if (atm.pincode=myPin){  
    console.log(`Your pincode is correct!!!`)
const operatorAns= await inquirer.prompt(
    {
       message:"Please select the operation",
       type:"list",   
       name:"operation",
       choices:["withdraw", "check balance","fast cash"]
    },
);
if(operatorAns.operation==="check balance"){
    console.log(`Your current balance is ${myBalance}`)
}else if(operatorAns.operation==="withdraw"){
    const amountAns = await inquirer.prompt(
        {
           message:"Enter your amount",
           type:"number",
           name:"amount"
        }

    )
    let balance = myBalance-amountAns.amount
    if (amountAns.amount<=myBalance){
    console.log(`Your remaining balance is ${balance}.`)
    }else{
        console.log(`Your account balance is insufficient.`)
    }
}else if (operatorAns.operation==="fast cash"){
    const fastcashAns = await inquirer.prompt(
        [
            {
                message:"Please select your amount",
                type:"list",
                name:"fastcash",
                choices:[1000,2000,5000,10000]
            },
    ]
);
let balance2= myBalance-fastcashAns.fastcash
console.log(`Your remaining balance is ${balance2}`)
}
}else{
    console.log(`Your pincode is incorrect!!!`)
}
