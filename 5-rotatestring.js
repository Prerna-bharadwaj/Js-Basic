let str = 'w3resource';
let intervalId;

function rotateString() {
    str = str.charAt(str.length - 1) + str.slice(0, str.length - 1);
    console.log(str);
}


intervalId = setInterval(rotateString, 1000);

// To stop the rotation after a certain time (e.g., 10 seconds)
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Rotation stopped.');
}, 10000);