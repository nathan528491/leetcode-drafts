/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateOld = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i+1; j < nums.length; j++) {
			console.log(`i: ${nums[i]}, j:${nums[j]}`)
			if(nums[i] === nums[j]) return true
		}
	}
	return false
};

console.log(containsDuplicateOld([1, 2, 2, 4, 5]))

var containsDuplicate = function(nums) {
	let map = new Map()
	for (const num of nums) {
		if (map.has(num)) return true
		map.set(num, num)
	}
	return false
};

console.log(containsDuplicate([1, 2, 2, 4, 5]))