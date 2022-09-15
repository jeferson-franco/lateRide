function solution(n) {
    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    let sum = 0;
    while (hours > 0) {
        sum += hours % 10;
        hours = Math.floor(hours / 10);
    }
    while (minutes > 0) {
        sum += minutes % 10;
        minutes = Math.floor(minutes / 10);
    }
    return sum;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test lateRide

// alternative solution
