/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Doesn't work for the 19th test, Allocation failed - JavaScript heap out of memory*/
const productExceptSelf = function (nums) {
	return nums
		.map((x, i) => {
		return nums.filter((x, index) => {
			return i !== index
		})
		})
		.map((arr) => {
		return arr.reduce((prev, curr)=> prev*curr, 1)
	})
};

console.log(productExceptSelf([1,2,3,4]))