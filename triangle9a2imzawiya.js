let n = 4;

for(let i = 0; i < n; i++)
{
	let s = "";
	for(let  j = 0; j < n; j++)
	{
		if((i == 0 || i == n - 1) || (j == 0 || j == n - 1))
		{
			s += "* ";
		}
		else
		{
			s += "  ";
		}
	}
	console.log(s);
}
