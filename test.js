const employees = [
  { name: "Sara", department: "Engineering", salary: 12000, yearsWorked: 4 },
  { name: "Omar", department: "Sales", salary: 9000, yearsWorked: 2 },
  { name: "Nadia", department: "Engineering", salary: 15000, yearsWorked: 6 },
  { name: "Yassine", department: "Marketing", salary: 8000, yearsWorked: 1 }
];
console.log("=== Employee Directory ===");
console.log(employees);
function findEmployeeByName(list, name)
{
	for(i = 0; i < list.length; i++)
	{
		if(list[i].name == name)
		{
			return list[i];
		}
	}
	return null;
}
console.log("Find Omar:", findEmployeeByName(employees, "Omar"));
console.log("Find Karim:" + findEmployeeByName(employees, "Karim"))
function giveRaise(list, name, amount)
{
	for(i = 0; i < list.length; i++)
        {
		if(findEmployeeByName(list, name) != null) 
		{
			list[i].salary += amount;
			return true;
		}
	}
	return false;
}

console.log("Give Omar a raise:" +  giveRaise(employees, "Omar", 1000))
console.log("Give Karim a raise: (missing)" +  giveRaise(employees, "Karim", 1000))
console.log("Omar after raise:", findEmployeeByName(employees, "Omar"))
function averageSalary(list)
{
	let sum = 0;
	for(i = 0; i < list.length; i++)
        {
		sum += list[i].salary;
	}
	return (sum / list.length);
}
console.log("Average salary:" + averageSalary(employees))
function countByDepartment(list, department)
{
	let count =0
	for(i = 0; i < list.length; i++)
        {

		if(list[i].department == department)
		{
			count++;
		}
	}
	return count;
}
console.log("Engineering count:" +  countByDepartment(employees, "Engineering"))
function highestPaidEmployee(list)
{
	let max = list[0].salary;
	let temp = 0;
	for(i = 0; i < list.length; i++)
        {
		if(max < list[i].salary)
		{
			max = list[i].salary;
			temp = list[i];
		}
	}
	return temp;
}
console.log("Highest paid employee:",highestPaidEmployee(employees))

