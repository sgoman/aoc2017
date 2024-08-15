'use strict'

const { arrayFrequency } = require('./utils')

const parseInput = input => input
	.replace(/[(),]/g, '')
	.split('\n')
	.map(l => l.split(' '))
	.map(([name, weight, _, ...children]) => { return {name, weight: Number(weight), children} })

const solve = (isPart2, input) => {
	input = parseInput(input)
	const root = input
		.filter(e => e.children.length)
		.filter((e, i, a) => !a.some(v => v.children.includes(e.name)))[0].name
	if (!isPart2) return root
	const weights = new Map()
	const getWeights = children => {
		let total = 0
		for (const childName of children) {
			const child = input.filter(e => e.name == childName)[0]
			let subtotal = 0
			if (child.children.length) {
				subtotal += weights.has(child.name) ? weights.get(child.name) : getWeights(child.children)
			}
			subtotal += child.weight
			if (!weights.has(child.name)) weights.set(child.name, subtotal)
			total += subtotal
		}
		return total
	}
	getWeights(input.filter(e => e.name == root)[0].children)
	const wrongVal = Object.entries(arrayFrequency([...weights.values()])).filter(f => f[1] == 1)[0][0]
	const wrongName = [...weights.entries()].filter(f => f[1] == wrongVal)[0][0]
	return input.filter(f => f.name == wrongName)[0].weight - (wrongVal - weights.get(input.filter(f => f.children.includes(wrongName))[0].children.filter(f => f != wrongName)[0]))
}

const part1 = input => solve(false, input)

const part2 = input => solve(true, input)

module.exports = { part1, part2 }
