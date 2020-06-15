const options = document.getElementById('options')

const option = document.querySelectorAll('.option')

option.forEach( option => {
    option.addEventListener('click', (e) => {
        e.preventDefault()

        options.remove()
    })
})