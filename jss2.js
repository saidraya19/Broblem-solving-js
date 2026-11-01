function arr()
{
    let nums = [4, 8, 11, 14, 1, 20, 25];
    for( let i = 0; i < nums.length; i++)
    {
        if(nums[i] % 2 != 0)
        {
            continue;
        }
        else if(nums[i] == 20)
        {
            break;
        }
        else
        {
            console.log(nums[i]);
        }
    }
}
arr();
