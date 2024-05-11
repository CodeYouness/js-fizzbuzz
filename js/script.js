const button = document.querySelector('button')
const divEl = document.querySelector('#FizzBuzz-container')


button.addEventListener('click', function () {



    for (let i = 1; i <= 100; i++) {

        button.classList.add('d-none')

        if ((i % 3 === 0) && (i % 5 !== 0)) {
            let pillDesign = document.createElement('p')
            pillDesign.classList.add('col-2', 'badge', 'rounded-pill')
            pillDesign.classList.add('text-bg-primary')
            pillDesign.innerHTML = 'Fizz'
            divEl.appendChild(pillDesign);
        } else if ((i % 5 === 0) && (i % 3 !== 0)) {
            console.log('Buzz')
        } else if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log('FizzBuzz')
        } else {
            console.log(i)
        }
    }

})
