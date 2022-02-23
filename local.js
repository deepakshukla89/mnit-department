const peos = document.querySelectorAll('[data-peo-target]')
const peoContents = document.querySelectorAll('[data-peo-content]')

peos.forEach(peo => {
  peo.addEventListener('click', () => {
    const target = document.querySelector(peo.dataset.peoTarget)
    peoContents.forEach(peoContent => {
      peoContent.classList.remove('active')
    })
    peos.forEach(peo => {
      peo.classList.remove('active')
    })
    peo.classList.add('active')
    target.classList.add('active')
  })
})