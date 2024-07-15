const randomnum= Math.floor(Math.random()*10)

const userguess= prompt('Guess number between 1 to 10:');
if(userguess === randomnum){
    alert('Good Work');
}
else{
    alert('Not matched. Correct number was' + randomnum)
}