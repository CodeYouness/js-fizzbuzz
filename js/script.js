const button = document.querySelector('button')
const divEl = document.querySelector('#FizzBuzz-container')
let pillDesign = document.createElement('p')
pillDesign.classList.add('col-1', 'badge', 'rounded-pill')

button.addEventListener('click', function () {



    for (let i = 1; i <= 100; i++) {

        button.classList.add('d-none')

        if ((i % 3 === 0) && (i % 5 !== 0)) {
            pillDesign.innerHTML = 'Fizz'
            pillDesign.appendChild()

        } else if ((i % 5 === 0) && (i % 3 !== 0)) {
            console.log('Buzz')
        } else if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log('FizzBuzz')
        } else {
            console.log(i)
        }
    }

})
