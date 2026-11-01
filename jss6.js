function red()
{
    let nums = [50, 10, 10, 20, 20];
    let x = nums = nums.filter( function(nums){
        return nums % 2 == 0;});
    let y = nums.reduce((nums, n) => n + nums, 0);
    console.log(y);
}
red();
