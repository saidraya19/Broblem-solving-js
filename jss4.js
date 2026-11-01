let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 300 }
];
function find_obj()
{
    let x = products.find(function (products)
    {
        return products.name === "Keyboard";
    });
    if(x)
    {
        console.log("exist");
    }
    else
    {
        console.log("not exist");
    }
    let y = products.filter(function(products)
        {
            return products.price >= 100;
        });
        console.log(y.name)
}
find_obj();
        
