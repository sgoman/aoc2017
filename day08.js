'use strict'

const parseInput = input => {
    return input.split('\n').map(l => l.split(' ')).reduce((acc, cur) => {
	    if (!Object.hasOwnProperty(acc.regs, cur[0])) acc.regs[cur[0]] = 0
	    const reg = cur[0]
	    cur[0] = `regs['${cur[0]}']`
	    cur[4] = `regs['${cur[4]}']`
	    cur[1] = cur[1] == 'inc' ? '+=' : '-='
	    acc.instructions.push([cur.slice(0, 3).join(' '), reg])
	    acc.conditions.push(cur.slice(4).join(' '))
	    return acc
    }, {regs: {}, instructions: [], conditions: []})
}

const solve = (isPart2, input) => {
	const {regs, instructions, conditions} = parseInput(input)
	let maxi = -10E9

	conditions.forEach((cond, i) => {
		if (eval(cond)) {
			const [ins, reg] = instructions[i]
			eval(ins)
			maxi = Math.max(maxi, regs[reg])
		}
	})

	return isPart2 ? maxi : Math.max(...Object.values(regs))
}

const part1 = input => solve(false, input)

const part2 = input => solve(true, input)

module.exports = { part1, part2 }
