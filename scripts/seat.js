const seats = document.querySelectorAll('.area-list > li > a')


if (seats) {
    seat = select(seats)
    seat.click()
} else {

}


// TODO: apply rules for selection
function select(seats) {
    let array = Array.from(seats)
    return array[array.length - 1]
}