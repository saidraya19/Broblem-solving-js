function sumdigit(n)
{
	while(n >= 10)
	{
		let mod = 0;
		while(n > 0)
		{
			mod += n % 10;
			n = Math.floor(n / 10);
		}
		n = mod;
	}
	return n;
}
let res = sumdigit(123489)
console.log(res);

