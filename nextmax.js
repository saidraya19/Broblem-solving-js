let arr = [1,3,4 ,56,45,43,6,4,222,76]
function max1(arr)
{
	let max = 0
	for(let i = 0; i < arr.length;i++)
	{
		if(max < arr[i])
		{
			max = arr[i]
		}
	}
	return max;
}
let max = 0
for(let i = 0; i < arr.length; i++)
{
	if(arr[i] != max1(arr) && max < arr[i])
	{
		max = arr[i]
	}
}
console.log(max);
function normtri()
{
	for(let i = 0; i < 4; i++)
{
	let s = ""
	for(let j =  0; j < i + 1 ; j++)
	{
		s += "*"
	}
	 console.log(s);
}
}
function anormtri()
{
for(let i = 5; i > 0; i--)
{
	let s = "";
        for(let j = 0; j < i ; j++)
        {
		s += "*"
        }
	console.log(s);
}
}
 normtri()  ,anormtri();
 normtri(), anormtri();



