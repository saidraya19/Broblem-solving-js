const name1 = "  sara amrani  ";
const birthYear1 = 2005;
const name2 = "OMAR ALAOUI";
const birthYear2 = 2003;
const name3 = "Nadia Idrissi";
const birthYear3 = 2004;
console.log("=== Student ID Badge Formatter ===")
console.log(name1, +  " " + birthYear1 + " | " + name2 + " " + birthYear2 + " | " + name3 + " " + birthYear3)
console.log(`Cleaned name 1: ${name1.trim()}`);
console.log(`Cleaned name 2: ${name2.trim()}`);
console.log(`Cleaned name 3: ${name3.trim()}`);
name11 = name1.trim();
name22 = name2.trim();
name33 = name3.trim();
function cap(s)
{
	let st = "";
	let i = 0;
	while(i < s.length - 1)
	{
	if(i == 0 || s[i - 1] == " " )
	{
		 st += s[i].toUpperCase();
	}
		else
		{
			st += s[i];
		}
		i++;
	}
	return st
}
function cp(name)
{
	let arr = name.split("  ")
	arr[0]. slice(0,1).toUpperCase;
	arr[1].slice(0,1).toUpperCase;
	return arr;
}
console.log(cp(name1))
let
//console.log("Capitalized name" + "1:" + cap(name11));
//console.log("Capitalized name" + "2:" + cap(name22));
//console.log("Capitalized name" + "3:" + cap(name33));
function getInitials(name)
{
    let st1 = "";

    for(let i = 0; i < name.length; i++)
    {
        if(i == 0 || name[i - 1] == " ")
        {
            st1 += name[i];
        }
    }

    return st1;
}
console.log(`Initials 1:${(getInitials(cap(name11)))}`);
console.log("Initials " + "2:" + (getInitials(cap(name22))));
console.log("Initials " + "3:" + (getInitials(cap(name33))));
let date1 = String(2005)
let date2 = String(2003)
let date3 = String(2004)
console.log(`Badge code 1:YC-${getInitials(cap(name11))}-${date1.slice(2,4)}`)
console.log(`Badge code 2:YC-${getInitials(cap(name22))}-${date2.slice(2,4)}`)
console.log(`Badge code 3:YC-${getInitials(cap(name33))}-${date3.slice(2,4)}`)
console.log(`${name11} - Badge code 1:YC-${getInitials(cap(name11))}-${date1.slice(2,4)}`)
console.log(`${name22} - Badge code 2:YC-${getInitials(cap(name22))}-${date2.slice(2,4)}`)
console.log(`${name33} - Badge code 3:YC-${getInitials(cap(name33))}-${date3.slice(2,4)}`)
function isValidName(name)
{
	if(name.length >= 4)
	{
		return true;
	}
	else
	{
		return false;
	}
}
console.log("Vowels in name 1: " + isValidName(name11))
console.log("Vowels in name 2: " + isValidName(name22))
console.log("Vowels in name 3: " + isValidName(name33))
function countVowelsInName(name)
{
	let count = 0;
	for(let i = 0; i < name.length; i++)
	{
		if(name[i] == "a" || name[i] ==  "e"|| name[i] ==  "u" ||name[i] ==  "i" ||name[i] ==  "o" || name[i] == "A" || name[i] ==  "E"|| name[i] ==  "U" ||name[i] ==  "I" ||name[i] ==  "O")
		{
			count++;
		}
	}
	return count;
}
console.log("Vowels in name 1: " + countVowelsInName(name11))
console.log("Vowels in name 2: " + countVowelsInName(name22))
console.log("Vowels in name 3: " + countVowelsInName(name33))
