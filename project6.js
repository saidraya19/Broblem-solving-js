const fleet = [
  { plate: "A123", model: "Dacia Logan", dailyRate: 30, available: true },
  { plate: "B456", model: "Renault Clio", dailyRate: 25, available: true },
  { plate: "C789", model: "Toyota Corolla", dailyRate: 40, available: false },
  { plate: "D012", model: "Hyundai Accent", dailyRate: 28, available: true }
];

console.log("=== Car Rental Fleet Manager ===");
console.log(fleet);
function findCarByPlate(list, plate)
{
	for(let i = 0; i < list.length; i++)
	{
		if(list[i].plate === plate)
		{
			return list[i]
		}
	}
			return null;
}
let val = findCarByPlate(fleet, "B456")
console.log("Find B456: " + val);
function rentCar(list, plate)
{
	let car = findCarByPlate(list, plate);
		if(car != null && car.available)
		{
			car.available = false;
			return true;
		}
	return false;
}
console.log("Rent B456:", rentCar(fleet, "B456"))
console.log("Rent C789 (already rented): ", rentCar(fleet, "C789"));
function countAvailable(list)
{
	let count = 0;
	for(let i = 0; i < list.length; i++)
	{
		if(list[i].available)
		{
			count++;
		}
	}
	return count;
}
console.log("Available cars:", countAvailable(fleet));
function fleetValue(list)
{
	let sum = 0;
	for(let i = 0; i < list.length; i++)
	{
		sum += list[i].dailyRate;
	}
	return sum;
}
console.log("Total fleet value:", fleetValue(fleet))
function cheapestAvailableCar(list)
{
	let min = null
	for(let i = 0; i < list.length; i++)
	{
		if(list[i].available)
		{
			if(min == null || list[i].dailyRate < min.dailyRate)
            {
                min = list[i];
            }
        }
	}
	return min;
}
console.log("Cheapest available car: ", cheapestAvailableCar(fleet))
		

