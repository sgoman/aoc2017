'use strict'

const { combineConditionally } = require('./utils.js')

const pairs = tmp => tmp.length < 2

const divisible = tmp => tmp.length == 2 && Math.max(...tmp) % Math.min(...tmp) == 0

const parseInput = input => input.split('\n').map(l => l.match(/\d+/g).map(Number))

const part1 = input => parseInput(input).reduce((acc, cur) => acc + Math.max(...cur) - Math.min(...cur), 0)

const part2 = input => parseInput(input).reduce((acc, cur) => {
    const vals = combineConditionally(cur, divisible, pairs)[0]
    return acc + Math.max(...vals) / Math.min(...vals)
}, 0)

module.exports = { part1, part2 }
