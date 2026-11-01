let arr = [3,4,4,6, 1, 64, 0]
let max = 0
for(let i = 0; i< arr.length;i++)
{
        if(max < arr[i])
        {
                max = arr[i]
        }
}
console.log(max);
