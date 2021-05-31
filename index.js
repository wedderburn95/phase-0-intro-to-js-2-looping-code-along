// Code your solutions in this file
const names = [Lisa, Kaitlin, Jan]
function writeCards( names, event ) {
    let thankYouCards = []
    //initial expression; condition; increment expression
    for ( let i = 0; i < names.length; i++ ) {
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown( firstNumber ) {
    while ( firstNumber > 0 ) {
        console.log( firstNumber );
        firstNumber -= 1;
    }
    console.log( firstNumber )
}