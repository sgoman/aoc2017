'use strict'

const parseInput = input => input.split('\n').map(Number)

const solve = (isPart2, input) => {
	let ip = 0, steps = 0
	while(ip < input.length) {
		const o = ip
		ip += input[o]
		input[o] += (isPart2 && input[o] >= 3) ? -1 : 1
		steps++
	}
	return steps
}

const part1 = input => solve(false, parseInput(input))

const part2 = input => solve(true, parseInput(input))

module.exports = { part1, part2 }
