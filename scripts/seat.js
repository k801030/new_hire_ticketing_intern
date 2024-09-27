registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;

    const seats = document.querySelectorAll('.area-list > li > a')
    if (seats) {
        seat = selectSeat(seats)
        seat.click()
    } else {

    }
}


// TODO: apply rules for selection
function selectSeat(seats) {
    let array = Array.from(seats)
    return array[array.length - 1]
}