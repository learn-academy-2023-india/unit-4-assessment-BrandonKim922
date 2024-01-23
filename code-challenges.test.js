// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {
    it("returns fibonacci values", () => {
      expect(fibonacci(6)).toEqual[1, 1, 2, 3, 5, 8]
      expect(fibonacci(10)).toEqual[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    })
  })
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
const fibonacci = (length) => {
    const number_set = [1, 1]

    for (let i = 2; i <length; i++)
    number_set[i] = number_set[i-1] + number_set[i-2]
    return number_set
}
// Pseudo code:
// 1 - understand Fibonacci concept
// 2 - Set a minimum value of Fibonacci, 2.
// 3 - Use loop method to increae the number of elements in array.


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("totalvote", () => {
    it("returns total vote number", () => {
      expect(totalVote(votes1)).toEqual(11)
      expect(totalVote(votes2)).toEqual(-31)
    })
  })
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
const totalVote = (votes) => {
    const both_up_and_down = votes.upVotes - votes.downVotes
    
    return both_up_and_down
}
// Pseudo code:
//1 - calculate total vote by up votes minus down votes
//2 - return the value
