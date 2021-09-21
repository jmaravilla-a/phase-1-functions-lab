// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
    let blocks = distanceFromHqInBlocks(block)
    return blocks * 264;
}

function distanceTravelledInFeet(a, b) {
    let feet = Math.abs(a - b)
    return feet * 264;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    if(feet <= 400) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * .02;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else if (feet > 2500) {
        return 'cannot travel that far';
    }
}
