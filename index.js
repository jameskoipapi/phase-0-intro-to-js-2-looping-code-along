// Code your solutions in this file
// const names = ["Guadaleupe", "Ollie", "Aki"];
function writeCards(names, event) {
    let newArry = [];
    for (let i = 0; i < names.length; i++) {
        newArry.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;

  }
  return newArry;
}

function countDown () {
    let i=10;
    while (i > -1) {
        console.log(i--);

    }
    return i;
}