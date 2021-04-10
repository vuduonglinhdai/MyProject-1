// Choose color
var optionElements = document.querySelectorAll('.board-colors option')
var colorElements = document.querySelectorAll('.color-item')
var logo = document.querySelector('.logo')
var icons = document.querySelectorAll('i')
let root = document.documentElement

// show boardElement
var custom = document.querySelector('.customize')
var boardColor = document.querySelector('.board-colors')
var listIcons = document.querySelector('.list-icons > span > i')
var layout = document.querySelector('.layout')
var layoutNotice = document.querySelector('.layout-notice')



for (var i = 0; i < optionElements.length; i++) {
    optionElements[i].onmouseover = function (e) {
        var colorValues = e.target.value

        if (e.target.closest('.color-item')) {
            (e.target.closest('.color-item')).style.backgroundColor = `${colorValues}`
        }

        for (var j = 0; j < icons.length; j++) {
            icons[j].style.setProperty('color', colorValues)
            icons[j].style.setProperty('transition', '0.5s')
        }
        logo.style.setProperty('color', colorValues)
        logo.style.setProperty('transition', '0.5s')
        
        // Mobile
        barsIcon.style.setProperty('color', colorValues)
        barsIcon.style.setProperty('transition', '0.5s')

    }

    optionElements[i].onmouseout = function (e) {
        if (e.target.closest('.color-item')) {
            e.target.closest('.color-item').style.backgroundColor = ''
        }

        for (var j = 0; j < icons.length; j++) {
            icons[j].style.setProperty('color', '')
        }

        logo.style.setProperty('color', '')
    }

    optionElements[i].onclick = function (e) {
        root.style.setProperty('--main-color', e.target.value)            
        boardColor.style.display = 'none'
        layout.style.display = 'none'
    }
}

// Show BoardColors

custom.onclick = function () {
    boardColor.style.display = 'flex'
    layout.style.display = 'block'
}

// Show Layout

layout.onclick = function () {
    layout.style.display = 'none'
    boardColor.style.display = 'none'
}

