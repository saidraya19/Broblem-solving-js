function search(arr, target)
{
	let higth = arr.length - 1
	let low = 0
	while(low <= higth)
	{
		 let mid = Math.floor((low + higth) / 2);
		if(arr[mid] == target){return mid}
		else if(arr[mid] > target) higth = mid - 1;
		else
		{
			low = mid + 1;
		}
	}
	return -1;
}
let arr = [1,2,3,4,5,6,7];
console.log(search(arr, 3))
