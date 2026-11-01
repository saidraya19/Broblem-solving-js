
let age = 15;
let ticket;
let day = "tuesday";
if(age < 15)
{	
if(day == "tuesday")
	{
		ticket = 3;
	}
else
	{
		ticket = 5;
	}
}
else if(age >= 65)
{
	if(day == "tuesday")
	{
                ticket = 5;
        }
	else
	{
		ticket = 7;
	}
}
else
{
	ticket = 10;
}
for(let i = 1; i <= 5; i++)
{
if(i == 3)
{
continue;
}
//console.log(i);
}
let xx = (a, b) => a + b;
let x = xx(2,5);
//console.log(x);

let arr = [3, 1, 4,]
for(let i = 0; i < arr.lenght; i++)
{
for(let j = i + 1; j < arr.lenght; i++)
{
if(arr[i] != arr[j])
{
console.log(arr[i], arr[j]);
}
}
}
