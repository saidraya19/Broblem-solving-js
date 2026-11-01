function stats(arr)
{
	let result = []
	let sum = 0;
	let min = arr[0]
	let max = 0;
	for (let i = 0; i < arr.length; i++)
	{
		sum += arr[i]
		if(min > arr[i]){min = arr[i]}
		if(max < arr[i]){max = arr[i]}
	}
	result.push(sum);
	result.push(sum / arr.length)
	result.push(min)
	result.push(max)
	return result;
}
let arr  = [1,2,3,4,5,6,8,9];
let res = stats(arr)
console.log("sum :",res[0])
console.log("average :", res[1])
console.log("min: ",res[2])
console.log("max : ",res[3])
