function speedDetector(speed) {
    const speedLimit = 70;
    const demeritThreshold = 5;
    
    if (speed <= speedLimit) {
        return 'Ok';
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritThreshold);
        if (demeritPoints > 12) {
            return 'License suspended';
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}


