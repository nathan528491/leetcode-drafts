/**
 * @name 1461. Check If a String Contains All Binary Codes of Size K
 * @param {number} dec
 * @param {number} k
 * @return {string}
 */
function decimalToBinary(dec, k) {
    let newString = (dec >>> 0).toString(2)
    if (newString.length < k) {
        for (let i = newString.length; i < k; i++) {
            newString = '0' + newString
        }
    }
    return newString
}

/**
 * @name 1461. Check If a String Contains All Binary Codes of Size K
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 * @status Time Limit Exceeded
 */
const hasAllCodes = function (s, k) {
    for (let i = 0; i < 2 ** k; i++) {
        if (!s.includes(decimalToBinary(i, k))) {
            return false
        }
    }
    return true
};


/**
 * @name 1480. Running Sum of 1d Array
 * @param {number[]} nums
 * @return {number[]}
 * @status Accepted
 */
const runningSum = function (nums) {
    return nums.map((num, key, nums)=> {
        num = 0
        for (let i = key; i >= 0; i--) {
            num+=nums[i]
        }
        return num
    })
};

console.log(runningSum([1,2,3,4]))

/**
 * @param {number[]} nums
 * @return {number}
 * @status Wrong Answer
 */
const  maximumUniqueSubarray = function(nums) {
    let arr = []
    let map = new Map()
    let mapIndex = new Map()
    let sum = 0
    let newSum = 0
    nums.forEach((num, index) => {
        // IF THE NUMBER IS NEW
        if(!map.has(num)) {
            // ADD THE NUMBER TO THE MAP
            map.set(num, num)
            mapIndex.set(num, index)
            // ELSE
        } else {
            // CALC SUM OF NUMBERS INBETWEEN THE TWO
            newSum = 0
            for(let i = mapIndex.get(num); i<index; i++) {
                newSum+=nums[i]
            }
            sum = Math.max(sum, newSum)
        }
    })
    return sum
};

