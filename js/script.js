const button = document.querySelector('button')
const divEl = document.querySelector('#FizzBuzz-container')


button.addEventListener('click', function () {

    for (let i = 1; i <= 100; i++) {

        button.classList.add('d-none')
        let pillDesign = document.createElement('p')
        pillDesign.classList.add('col-2', 'badge', 'rounded-pill')

        if ((i % 3 === 0) && (i % 5 !== 0)) {
            pillDesign.classList.add('text-bg-light')
            pillDesign.innerHTML = 'Fizz'
            divEl.appendChild(pillDesign);

        } else if ((i % 5 === 0) && (i % 3 !== 0)) {
            pillDesign.classList.add('text-bg-dark')
            pillDesign.innerHTML = 'Buzz'
            divEl.appendChild(pillDesign);

        } else if ((i % 5 === 0) && (i % 3 === 0)) {
            pillDesign.classList.add('text-bg-danger')
            pillDesign.innerHTML = 'FizzBuzz'
            divEl.appendChild(pillDesign);

        } else {
            console.log(i)
            pillDesign.classList.add('text-bg-secondary')
            pillDesign.innerHTML = i
            divEl.appendChild(pillDesign);
        }

    }

})
