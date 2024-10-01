registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;

    const seats = document.querySelectorAll('.area-list > li > a')
    const seat = selectOrRandom(seats, storage.seatName)
    seat.click()
}

