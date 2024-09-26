const countPicker = document.getElementById('count-picker');

countPicker.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const buttons = countPicker.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.classList.add('btn-light');
        });

        event.target.classList.remove('btn-light');
        console.log(`clicked ${event.target.value}`);
    }
})

