const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// people section

const peoples = document.querySelectorAll('[data-people-target]')
const peopleContents = document.querySelectorAll('[data-people-content]')

peoples.forEach(people => {
  people.addEventListener('click', () => {
    const target = document.querySelector(people.dataset.peopleTarget)
    peopleContents.forEach(peopleContent => {
      peopleContent.classList.remove('active')
    })
    peoples.forEach(people => {
      people.classList.remove('active')
    })
    people.classList.add('active')
    target.classList.add('active')
  })
})

// peos

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

// PEOs (Programme Educational Objectives) for B. Tech. (Mechanical Engineering) 

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}

// Confrence 

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}