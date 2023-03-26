const names = ["Guadalupe", "Ollie", "Aki"];
const messages = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names [i]}, for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}

function countDown(number) {
    while (number >= 0){
        console.log(number);
        number--;
    }
}
