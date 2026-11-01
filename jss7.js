function slic()
{
    let names = ["Said", "Omar", "Yassine", "Anas", "Hamza"];
    let x = names.slice(1,4);
    console.log(x);
    x.splice(1,1);
    console.log(x);
}
slic();
