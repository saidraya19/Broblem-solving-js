let arr = [{name:"said", age:22},{name:"saad", age:20},{name:"souad", age:19},{name:"amir", age:10}]
function young(arr)
{
	let min = arr[0]
	let obj;
	for(let i = 0; i< arr.length;i++)
	{
		if(min.age > arr[i].age)
		{
			min = arr[i];
		}
	}
	return min;
}
console.log(young(arr))
function sort(arr)
{
	for(let i = 0; i < arr.length; i++)
	{
		for(let j = 0; j < arr.length - 1 - i; j++)
		{
			if(arr[j].age < arr[j+1].age)
			{
				[arr[j], arr[j + 1] = arr[j + 1], arr[j]]
			}
		}
	}
	return arr;
}
console.log(sort(arr));



