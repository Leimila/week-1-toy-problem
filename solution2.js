function checkSpeed(speed) {
    const speedLimit = 70;
    const pointsPer5k =1;
    // If the speed is within the speed limit or less, print "OK"
    if (speed <= speedLimit) {
        console.log("OK");
        } else {
            // Calculate the number of points by finding how many multiples of 5 km/h over the speed limit the driver is going
            const points = Math.floor((speed -speedLimit) / 5) ;
            // If the points exceed 12, print "License suspended"
            if (points >12){
                console.log("License suspended");
                } else {
                    // Otherwise, print the number of points
                    console.log(`points: ${points}`);

                
            }

    }
}

    checkSpeed(80);
    checkSpeed(140);