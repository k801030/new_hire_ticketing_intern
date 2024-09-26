const select = document.querySelector('table#ticketPriceList > tbody > tr').querySelector('select')


if (select) {
    option = selectTicket(select.options)
    option.selected = true

} else {
    console.log("select not found")
}

// TODO: apply rules for selection
function selectTicket(tickets) {
    let array = Array.from(tickets)
    return array[1]
}