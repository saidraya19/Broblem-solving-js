function cond()
{
    let age = 17;
    let score = 75;
    let student = true;
    if( age >= 18 && student)
    {
        console.log("Adult student");
    }
    else if( age >= 18)
    {
        console.log("Adult");
    }
    else
    {
        console.log("minor");
    }
	console.log(2 * 2);
	let answer = confirm("Are you John Smith?");

if (answer) {
    console.log("Welcome John!");
} else {
    console.log("You are not John.");
}
}
cond();
