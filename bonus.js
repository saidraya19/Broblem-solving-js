let c = 0;
for(let i = 1; i <= 3; i++)
{
	for(let j = 1; j <= 4; j++)
	{
		if(j % 2 != 0)
		{
			console.log("Day" + i + "Customer " +  j + " visited the ATM.");
		}
		else if(j % 2 == 0)
		{
			console.log("Day" + i + "Customer " +  j + " visited the ATM.");
			console.log("Day" +  1 + "- Customer " + j + "performed a full-service");
			c++;
		}
	}
}
console.log("Total full-service transactions across all days: " + c);
