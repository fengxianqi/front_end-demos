// 主要考察编码能力

/*******************************
 * 题目
 * 电费分阶梯收费，用电n度，求电费多少钱：
 * 1到5度，单价30；
 * 5到20度，单价15；
 * 20到50，单价10
 * 
 * 比如用电6度，则收费30*5+15*1=165元。
 * 类似这种题目。
 */



function sum (n) {
	const map = new Map([
	  [[1,5], 30], // key是区间，value是单价基数
	  [[5,20], 15],
	  [[20,50],10]
	])


	let sum = 0
	for (const [keys, val] of map) {
		if (n > keys[0] && n <= keys[1]) {
			// 当前阶梯的溢价
			sum += val * (n - keys[0])

		} else if (n > keys[1]) {
			// 处于目标区间的上几个区间
			sum += val * keys[1]
		}
	}
	return sum
}