registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;
    const select = document.querySelector('table#ticketPriceList > tbody > tr').querySelector('select')

    if (select) {
        let option = selectTicket(select.options)
        option.selected = true
    }
    const agreement = document.querySelector('#TicketForm_agree')
    agreement.checked = true
    const captchaInput = document.querySelector('#TicketForm_verifyCode')
    captchaInput.focus()
}


function selectTicket(options) {
    for (const option of options) {
        if (option.value === storage.ticketCount) {
            return option
        }
    }
}