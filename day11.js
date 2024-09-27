'use strict'

const parseInput = input => input.trim().split(',')

const cubeStep = {
	'nw': [-1, 0, 1], 'n': [0, -1, 1], 'ne': [1, -1, 0],
	'sw': [-1, 1, 0], 's': [0, 1, -1], 'se': [1, 0, -1],
}

const solve = input => parseInput(input).reduce(({pos, dist, maxD}, step) => {
	for (let i = 0; i < 3; i++) pos[i] += cubeStep[step][i]
	dist = Math.max(Math.abs(pos[0]), Math.abs(pos[1]), Math.abs(pos[2]))
	maxD = Math.max(maxD, dist)
	return { pos, dist, maxD }
}, { pos: [0, 0, 0], dist: 0, maxD: 0 })

const part1 = input => solve(input).dist

const part2 = input => solve(input).maxD

module.exports = { part1, part2 }
