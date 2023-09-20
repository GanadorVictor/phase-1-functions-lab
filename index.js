// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);

  }
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264; // 1 block = 264 feet
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for the distance between 400 and 2000 feet
    } else if (distance <= 2500) {
      return 25; // Flat fare for a distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance is over 2500 feet
    }
  }
  
  
  