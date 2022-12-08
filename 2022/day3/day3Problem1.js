/* PROBLEM STATEMENT::: Advent of Code 2022 Day 3 problem 1
--- Day 3: Rucksack Reorganization ---
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?


*/

// SOLUTION:::

//import { readFile } from 'node:fs/promises';
const fileSys = require('fs').promises
const path = require('path')
const fileName = 'rucksacks.txt';
const filePath = path.join(__dirname, fileName)

async function readTxtFile(filePath) {
    // return the contents of the calories text file by reading it
    try {    
        const contents = await fileSys.readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
        return contents
        
    } catch (err) {
        console.error(err.message);
    }
}

function findPriorityValue(data) {
    let arr = data.split("\n")
    //console.log(arr)
    //let splitSacks = {}

    // use charCode to evaluate
    // 65 A 90 Z 97 a 122 z


    let total = 0
    for (let i = 0; i < arr.length; i++) {
        let fullSack = arr[i] // vJrwpWtwJgWrhcsFMMfFFhFp
        let leftSack = {} //{v: 1, J: 1, r:1, w:2, p:1, W:1, t:1}
        let same = ""
        let left = fullSack.slice(0,fullSack.length / 2)
        // make a hashmap for left
        left.split("").forEach(x => leftSack[x] ? leftSack[x]++ : leftSack[x] = 1)
        same = fullSack.slice(fullSack.length / 2, ).split("").find(char => char in leftSack)
        total += calcCode(same)
    }
    return total
}

function calcCode(char) {
    let priority = 0
    if (char.toUpperCase() !== char) {
        priority = char.charCodeAt() - 96
    }
    else {
        priority = char.charCodeAt() - 38
    }
    return priority
}

readTxtFile(filePath).then((data) => {
    console.log(findPriorityValue(data))
    return findPriorityValue(data)
})