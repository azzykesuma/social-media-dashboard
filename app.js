// grabbing all id and query

let toggle = document.getElementById('toggle');
let labelToggle = document.querySelector('.toggleLabel');
let headerTitle = document.getElementById('headerTitle');
let card = document.querySelectorAll('.topCard');
let userId = document.querySelectorAll('.userId')
let total = document.querySelectorAll('.total')
let today = document.querySelectorAll('.today')
let middleCard = document.querySelectorAll('.middleCard')
let status = document.querySelectorAll('.status')
let totalToday = document.querySelectorAll('.totalToday')
let overview = document.getElementById('overview')

// adding click event to toggle
toggle.addEventListener('click',() => {
    if(toggle.checked === true) {
        let body = document.body
        body.style.backgroundColor = 'hsl(230, 17%, 14%)'
        headerTitle.style.color = '#fff'
        overview.style.color = '#fff'

        card.forEach(cardBcg => {
            cardBcg.style.backgroundColor = 'hsl(228, 28%, 20%)'
        })

        userId.forEach(userColor => {
            userColor.style.color = 'hsl(228, 34%, 66%)'
        })

        userId.forEach(userColor => {
            userColor.style.color = 'hsl(228, 34%, 66%)'
        })

        total.forEach(totalColor => {
            totalColor.style.color = '#fff'
        })

        today.forEach(todayColor => {
            todayColor.style.color = '#fff'
        })

        middleCard.forEach(middle => {
            middle.style.backgroundColor = 'hsl(228, 28%, 20%)'
        })

        status.forEach(statColor => {
            statColor.style.color = 'hsl(228, 34%, 66%)'
        })

        totalToday.forEach(allColor => {
            allColor.style.color = ' #fff'
        })

        
        // light mode
    } else {
        let body = document.body
        body.style.backgroundColor = 'white'
        headerTitle.style.color = '#000'
        overview.style.color = 'hsl(228, 12%, 44%)'

        card.forEach(cardBcg => {
            cardBcg.style.backgroundColor = 'hsl(227, 47%, 96%)'
        })

        userId.forEach(userColor => {
            userColor.style.color = 'hsl(228, 12%, 44%)'
        })

        total.forEach(totalColor => {
            totalColor.style.color = '#000'
        })

        today.forEach(todayColor => {
            todayColor.style.color = 'hsl(228, 12%, 44%)'
        })

        middleCard.forEach(middle => {
            middle.style.backgroundColor = 'hsl(225, 100%, 98%)'
        })

        status.forEach(statColor => {
            statColor.style.color = 'hsl(228, 12%, 44%)'
        })

        totalToday.forEach(allColor => {
            allColor.style.color = ' #000'
        })
    }
})