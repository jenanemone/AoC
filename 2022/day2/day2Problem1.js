// PROBLEM ::: Advent of Code 2022 Day 2 Problem 1

/*
--- Day 2: Rock Paper Scissors ---
The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?

https://adventofcode.com/2022/day/2/input
*/

// SOLUTION :::

// parameters: a file with strategies per line, encoded
// returns: total score if you follow strategy guide
// e.g. A/X= rock B/Y = paper C/Z = scissors 
/*
    A Y => 8 (2 coz paper + 6 for win)
    B X => (1 point rock + 0 for losing)
    C Z => (3 for scissors + 3 for draw)
*/

// our "code" : Y = 2, X = 1, Z = 3, win = 6, lose = 0, draw = 3,
// win or lose: A Y = win, A X = draw, A Z lose, B Y = draw, B X = lose, B Z = win, C Y = lose, C X = win, C Z = draw

// PSEUDOCODE - how to get total score
/*
parse the file, create array like in elf snacks day 1
conditional logic with a counter for the points
*/

const fileSys = require('fs').promises
const path = require('path')
const fileName = 'rockPaperStrategy.txt';
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

function createArray(data) {
    let arr = data.split("\n")
    //console.log(arr)
    return arr
}

function tabulate(arr) {
    let score = 0
    // our "code" : Y = 2, X = 1, Z = 3, win = 6, lose = 0, draw = 3,
// win or lose: A Y = win, A X = draw, A Z lose, B Y = draw, B X = lose, B Z = win, C Y = lose, C X = win, C Z = draw
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        switch (temp) {
            case 'A Y' : 
                score += 6 + 2
                break
            case 'A X' :
                score += 3 + 1
                break
            case 'A Z' :
                score += 0 + 3
                break
            case 'B Y' :
                score += 3 + 2
                break
            case 'B X' :
                score += 0 + 1
                break
            case 'B Z' :
                score += 6 + 3
                break
            case 'C Y' :
                score += 0 + 2
                break
            case 'C X' :
                score += 6 + 1
                break
            case 'C Z' :
                score += 3 + 3
                break
        }
    }
    console.log(score)
    return score
}

readTxtFile(filePath).then((data) => {
    let a = createArray(data)
    tabulate(a)
})