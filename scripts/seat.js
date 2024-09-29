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

function selectSeat(seats) {
    for (let seat of seats) {
        if (seat.textContent.includes(storage.seatName)) {
            return seat
        }
    }

    seats = Array.from(seats)
    return randomItem(seats)
}

/**
 * Pick a random item from the array
 * @param items
 * @returns item
 */
function randomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}