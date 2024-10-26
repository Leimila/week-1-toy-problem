function checkSpeed(speed) {
    const speedLimit = 70;
    const pointsPer5k =1;
    if (speed <= speedLimit) {
        console.log("OK");
        } else {
            const points = Math.floor((speed -speedLimit) / 5) ;
            if (points >12){
                console.log("License suspended");
                } else {
                    console.log(`points: ${points}`);

                
            }

    }
}

    checkSpeed(80);
    checkSpeed(140);