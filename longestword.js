let s = "hello world how are youu, fiiiiiine";
let arr = s.split(' ')
//console.log(arr);
function findlongest(arr)
{
	let max = 0;
	let res;
	for(let i = 0; i < arr.length; i++)
	{
		let  c = 0;
		let d = "";
		for(let j = 0; j < arr[i].length; j++)
		{
			c++;
			d += arr[i][j];
		}
		if(max < c)
		{
			max = c;
			res = d;
		}
	}
	return res;
}
console.log(findlongest(arr));

