var removeElement = function (nums, val) {
    let pointer = 0;
    let temp;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=val){
            temp = nums[i];
            nums[i] = nums[pointer];
            nums[pointer] = temp;
            pointer++;
        }
        else{
            nums[i] = null;
        }
    }
    return pointer;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeElement(arr, 2);
console.log(result);
console.log(arr);