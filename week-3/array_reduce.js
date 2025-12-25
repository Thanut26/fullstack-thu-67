const numbers = [14, 15, 16, 17];

const sum = numbers.reduce((accumulator,
currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);