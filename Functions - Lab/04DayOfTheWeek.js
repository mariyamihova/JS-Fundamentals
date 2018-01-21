function findDay(dayName) {

    let week = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };

    if (dayName !== 'Monday' &&
        dayName !== 'Tuesday' &&
        dayName !== 'Wednesday' &&
        dayName !== 'Thursday' &&
        dayName !== 'Friday' &&
        dayName !== 'Saturday' &&
        dayName !== 'Sunday') {
        console.log("error");
    } else {
        console.log(week[dayName]);
    }
}
findDay('Friday');