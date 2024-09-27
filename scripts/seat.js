registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;

    const seats = document.querySelectorAll('.area-list > li > a')
    if (seats) {
        const seat = selectSeat(seats)
        seat.click()
    } else {

    }
}


// TODO: apply rules for selection
function selectSeat(seats) {
    for (let seat of seats) {
        if (seat.textContent.includes(storage.seatName)) {
            return seat
        }
    }
    // if not found, return first one
    return seat[0]
}