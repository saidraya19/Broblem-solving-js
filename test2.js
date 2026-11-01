let arr = [1,2,4,6,64,]
let min = arr[0]
for(let i = 0; i< arr.length;i++)
{
	if(min > arr[i])
	{
		min = arr[i]
	}
}
console.log(min);
