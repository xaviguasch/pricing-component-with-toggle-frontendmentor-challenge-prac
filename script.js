const toggleCheck = document.getElementById('togglecheck')
const cards = document.querySelectorAll('.card')
const toggleBall = document.querySelector('.toggle__ball')

toggleCheck.addEventListener('change', (e) => {
  cards.forEach((card) => {
    card.classList.toggle('card-annually')
  })

  toggleBall.classList.toggle('toggle__ball--left')
})
