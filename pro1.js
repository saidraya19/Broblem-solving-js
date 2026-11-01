let arr = [1,2,5,6,8,9]
function find(arr)
{
let max = 0;
let index = 0
for(let i = 0; i < arr.length; i++)
{
if(max < arr[i])
{
max = arr[i]
	index = i
}
}
return index
}
console.log(find(arr))
