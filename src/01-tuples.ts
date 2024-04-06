const prices: (number | string)[] = [1, 2, 'A', 4];

let user: [string, number];
user = ['juniorparadelo', 29];
user = ['user2', 25];

// react use tuples ;)
const [username, age] = user;
console.log('username:', username);
console.log('age:', age);
