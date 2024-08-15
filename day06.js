'use strict'

const parseInput = input => input.match(/\d+/g).map(Number)

const solve = (isPart2, input) => {
	input = parseInput(input)
	const states = new Map(), l = input.length
	let i = 0
	while(!states.has(input.join(','))) {
		states.set(input.join(','), i++)
		let j = input.findIndex(e => e == Math.max(...input))
		let v = input[j]
		input[j] = 0
		while(v--) input[(++j)%l]++
	}
	return isPart2 ? i - states.get(input.join(',')) : i
}

const part1 = input => solve(false, input)

const part2 = input => solve(true, input)

module.exports = { part1, part2 }
