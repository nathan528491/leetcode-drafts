/* First solution I came up with
* I don't know why I couldn't think of anything less complex */

const prices =  [7,1,5,3,6,4]
// const prices = [7,2,4,1]
// const prices =  [4,7,1,2]
// const prices = [7,6,4,3,1]
// const prices = [2,4,1]
// const prices = [3, 11, 1, 6, 3, 7]
// const prices = [1,2]

let maxProfit = 0

const sortedIndexes = prices
	.map((element,index) => {
		return { index: index, value: element }})
	.sort((x, y) => {
		return x.value > y.value ? 1 : x.value === y.value ? 0 : -1 })
	.map(element => {return element.index})

console.log(`${prices}\n-----------\n${sortedIndexes}\n`)

for (let i = 0; i < prices.length-1; i++) {
	for (let j = 0; j <i+1 ; j++) {
		if(sortedIndexes[sortedIndexes.length-1-i+j] - sortedIndexes[j] > 0) {
			const newMax = prices[sortedIndexes[sortedIndexes.length-1-i+j]] - prices[sortedIndexes[j]]
			if (newMax > maxProfit) {
				maxProfit = newMax
				console.log(`New maximum profit : ${maxProfit}`)
			}
		} else {
			console.log(`${prices[sortedIndexes[sortedIndexes.length-1-i+j]]} is behind ${prices[sortedIndexes[j]]} on the list`)
		}
	}
}

console.log(`\nMaximum profit : ${maxProfit}`)


/* Other solution */
maxProfit = 0;
let min = prices[0]

prices.forEach(price => {
	min = Math.min(min, price)
	maxProfit = Math.max(price - min, maxProfit)
})
console.log(`\nMaximum profit : ${maxProfit}`)
