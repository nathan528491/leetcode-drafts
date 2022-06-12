/**
 * @name 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
}


/**
 * @name 33. Search in Rotated Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
	return nums.findIndex(e => e === target)
};


/**
 * @name 53. Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let previous = nums[0]
	let max = nums[0]
	for(let i = 1; i < nums.length; i++){
		previous = Math.max(nums[i], previous + nums[i]);
		max = Math.max(previous, max);
	}
	return max;
};


/**
 * @name 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let max = 0
	let min = prices[0]

	prices.forEach(price => {
		min = Math.min(min, price)
		max = Math.max(price - min, max)
	})
	return max
};

const maxProfitV2 = function (prices) {

	let max = 0
	const sortedIndexes = prices.map(function (element, index) {
		return {index: index, value: element}
	})
		.sort(function (x, y) {
			return x.value > y.value ? 1 : x.value === y.value ? 0 : -1
		})
		.map(function (e) {
			return e.index
		})

	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = 0; j < i + 1; j++) {
			if (sortedIndexes[sortedIndexes.length - 1 - i + j] - sortedIndexes[j] > 0) {
				const newMax = prices[sortedIndexes[sortedIndexes.length - 1 - i + j]] - prices[sortedIndexes[j]]
				max = newMax > max ? newMax : max
				if (i === j) return max;
			}
		}
	}
	return max
};
/**
 * @name 152. Maximum Product Subarray
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

};

/**
 * @name 153. Find Minimum in Rotated Sorted Array
 * @param {number[]} nums
 * @return {any[]}
 * @status Accepted
 */
var findMin = function(nums) {
	return nums
		.sort((a, b) => a-b)
		.slice(0,1)
};

/**
 * @name 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 * @status Accepted
 */
const containsDuplicate = function (nums) {
	let map = new Map()
	for (const num of nums) {
		if (map.has(num)) return true
		map.set(num, num)
	}
	return false
};


/**
 * @name 238. Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 * 1st solution doesn't work for the 19th test, Allocation failed - JavaScript heap out of memory
 */

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

const productExceptSelfV2 = function (nums) {
	let arr = [];
	let lMulti = 1;
	let rMulti = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		arr[i] = rMulti;
		rMulti *= nums[i];
	}
	for (let i = 0; i < nums.length; i++) {
		arr[i] *= lMulti;
		lMulti *= nums[i];
	}
	return arr;
};
