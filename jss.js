for(let i = 0; i < 4; i++)
{
	let s = "";
for(let j = 0; j < 4; j++)
{
if((i == 0 || i == 3) && (j == 0 || j == 3))
{
	s += " (" + i + j + ") ";
}
else if((i == 1 && j == 1 || j == 2) || (i == 2 && (j == 1 || j == 2)))
{
	s += " (" + i + j + ") ";
}
else{
	s += " (" + i + j + ") ";
}
}
console.log(s);
}
