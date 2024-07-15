function daysUntilChristmas() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmasThisYear = new Date(currentYear, 11, 25); 

    let nextChristmas = christmasThisYear;

    
    if (today > christmasThisYear) {
        nextChristmas = new Date(currentYear + 1, 11, 25);
    }

    const differenceInTime = nextChristmas - today;

    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    return differenceInDays;
}

const daysLeft = daysUntilChristmas();
console.log(`Days until next Christmas: ${daysLeft}`);
