const name = ["Lisa", "Kaitlin", "Jan"];
const surprise = "surprise";

function writeCards(name, surprise) {
    let messageArray =[];
    for (let i=0; i < name.length; i++) {
        let message = `Thank you, ${name[i]}, for the wonderful ${surprise} gift!`
        messageArray.push(message);
    }
    return messageArray;
}

function countDown(int) {
    let i=10;
    while (i >= 0) {
        console.log (i);
        i--
    }
    return int;
}
