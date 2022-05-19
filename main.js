let userName = 'Jack';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

var userQuestion = 'Should I quit my day job and sail around the world?';

console.log(`You want to know "${userQuestion}"`);

const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

var eightBall = '';
switch (randomNumber) {
case 0:
    eightBall = 'It is certain';
    break;
case 1:
    eightBall = 'Indubitably';
    break;
case 2:
    eightBall = 'Reply hazy try again';
    break;
case 3:
    eightBall = 'Cannot predict now';
    break;
case 4:
    eightBall = 'Do not count on it';
    break;
case 5:
    eightBall = 'My sources say no';
    break;
case 6:
    eightBall = 'Outlook not so good';
    break;
case 7:
    eightBall = 'Signs point to yes';
    break;
default:
    eightBall = 'Out to lunch. Try again later.';
    break;
}

console.log (`${eightBall}, ${userName}.`);
