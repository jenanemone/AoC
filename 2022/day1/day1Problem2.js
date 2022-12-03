/* PROBLEM STATEMENT::: Advent of Code 2022 Day 1 problem 2
--- Part Two ---
By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
*/

// SOLUTION:::

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
    // FINAL answer function... find the 3 juiciest elves
    let arr = Object.values(elfCals)
    arr = arr.sort((a,b) => b - a)
    return arr[0] + arr[1] + arr[2]

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