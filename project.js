let balance = 500;
let totalAttempts = 10;
console.log( "=== ATM withdrawal simulator ===");
console.log(balance + " " + totalAttempts);
let  tentative = 0;
for(let i = 1; i <= totalAttempts ; i++)
{
	tentative += 15
	console.log("Attempt " + i + " - " + "Requested amount: " + tentative);
}
console.log("\n\n");
tentative = 0;
let x = 0;
for(let j = 1; j <= totalAttempts ; j++)
{
	x = j * 15;
	if(j % 4 == 0)
	{
		console.log("Attempt" + " - " + "Invalid withdrawal request, skipped");
		continue;
	}
	if(x <= balance)
	{
		console.log("Attempt " + j + " - Requested amount: ", x);
	}
	else if(x >= balance)
	{
		console.log("Attempt " + j + " - " + "Insufficient funds. Stopping simulation.");
		break;
	
	}
	balance -= x;
	console.log("Attempt " + j +  " - Withdrawal successful. New balance:" + balance);
}
		console.log("Simulation terminée. Solde final :" + balance + " MAD après " + totalAttempts + " 3tentatives autorisées.");
let isVIP = true;
if(isVIP)
{
	balance += 100;
	console.log("VIP bonus applied, new balance :" +  balance + " MAD");
}
if(balance <= 100)
{
	console.log("Low balance");
}
else if(101 <= balance && balance <= 400 )
{
	console.log("Medium balance");
}
else if(balance > 400)
{
	console.log("High balance");
}
