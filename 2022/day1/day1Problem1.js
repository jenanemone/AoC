/* PROBLEM STATEMENT::: Advent of Code 2022 Day 1 problem 1
e.g. :
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000

*/

// SOLUTION:::

// params: a list of foods with caolorie levels, grouped distinctly
// return : integer representing the elf with the most total
/*
const fs = require('fs')

const file = fs.readFile(`calories.txt`, {econding: 'utf-8'}, (err,data) => {
    console.log(err)
    return data.toString()
})

console.log(typeof file)
*/
//console.log(file)




//import { readFile } from 'node:fs/promises';
const fileSys = require('fs').promises
const path = require('path')
const fileName = 'calories.txt';
const filePath = path.join(__dirname, fileName)

async function readTxtFile(filePath) {
    // return the contents of the calories text file by reading it
    try {    
        const contents = await fileSys.readFile(filePath, { encoding: 'utf8' });
        return contents
        console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
}



function createListOfCals(data) {
    let arr = data.split("\n")
    //console.log(arr)
    //console.log(arr[arr.length - 1])
    let elfCals = {}
    let calories = 0
    let elfNum = 1
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (!value) {
            elfCals[elfNum] = calories // add our elf with elfNum to the elfCals dictionary
            elfNum++ // increase the elfNum
            calories = 0 // reset our calorie counter
        }
        else {
            calories += +value // otherwise add the value of the calories to the elf's individual count
        }
    }
    //console.log(elfCals)
    return elfCals
}

function findMaxCals(elfCals) {
    // FINAL answer function... find the juiciest elf
    let max = 0

    for (let val of Object.values(elfCals)) {
        if (val > max) {
            max = val    
        }
    }
    return max
}

readTxtFile(filePath).then((data) => {
    //console.log(data)
    //console.log(typeof data)
    const elfCals = createListOfCals(data)
    const maxCals = findMaxCals(elfCals)
    console.log(maxCals)
})