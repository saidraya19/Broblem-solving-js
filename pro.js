function revers(s)
{
	let arr = s.split('');
	let i = 0;
	let j = arr.length - 1;
	while(i < j)
	{
		[arr[i], arr[j]] = [arr[j], arr[i]];
		i++;
		j--;
	}
	let st = arr.join('');
	return st;
}
let sr1 = "";
function find(s)
{
	for(let i = 0; i < s.length;i++)
	{
		let count = 1;
		if(!sr1.includes(s[i]))
		{
		for(let j = i + 1; j < s.length;j++)
		{
			if(s[i] == s[j])
			{
				count++;
			}
		}
			sr1 += s[i] 
		console.log(s[i], count);
			}
}
}
find("saiad");
function find(b)
{
for(let i = 0; i < b.length; i++)
{
if(b[i] == "n") return b[i];
}
}
console.log(find("banana"));
let sr = " HeLLo WoRLD!! ";
let t = sr.trim();
let t1 = t.slice(0,11);
let sd = ""
function revers(n)
{
for(let i = n.length - 1; i >= 0; i--)
	{
sd += n[i];
}

return sd;
}
//let arr =  [5, 9, 1, 7]
let max = 0;
for(let i = 0; i < arr.length;i++)
{
if(max < arr[i])
{
max = arr[i];
}
}
let pos = arr.indexOf(max)
let arr1 = arr.filter(etem => etem != max);
let sum = 0;
console.log(arr1)
for(let i = 0; i < arr1.length; i++)
{
sum += arr1[i];
}
console.log(sum)
console.log(sum / arr1.length)
console.log(revers("level") === "level")
let arr = [1,2,5,6,8,9];
function find(arr)
{
let max = 0;
let index = 0
for(let i = 0; i < arr.length; i++)
{
if(max < arr[i])
{
max = arr[i]
index = i;
}
}
}
console.log(find(arr))
