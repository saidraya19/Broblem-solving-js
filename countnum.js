let num = 1234;
let nb = String(num)
let arr = nb.split("")
console.log(arr)
let sum = 0;
for(let i = 0; i < arr.length; i++)
{
	sum += arr[i]
}
console.log(sum);


