function haram1(n)
{
        let i = n ;
        while(i >= 1)
        {
                let j  = 1;
                let s = "";
                while( j <=  n * 2 - 1)
                {
                        if(j >= n - (i - 1) && j <= n + (i - 1))
                        {
                                s += "*"
                        }
                        else{
                                s  += " ";
                        }
                        j++
                }
                        console.log(s);
i--
        }
	console.log("           YOUCODE");
}
function haram(n)
{
	let i = 1 ;
	while(i <= n )
	{
		let j  = 1;
		let s = "";
		while( j <=  n * 2 - 1)
		{
			if(j >= n - (i - 1) && j <= n + (i - 1))
			{
				s += "*"
			}
			else{
				s  += " ";
			}
			j++
		}
			console.log(s);
i++
	}
}
haram1(15);
haram(15);
