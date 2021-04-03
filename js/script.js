var userIcon = document.querySelector('.user-icon')
var mobileUserIcon = document.querySelector('.mobile-user-icon')
var clockIcon = document.querySelector('.clock')
var typingBoard = document.querySelector('.container')
var layout = document.querySelector('.layout')
var forms = document.querySelectorAll('.form')

// MOBILE 
var mobileUserIcon = document.querySelector('.mobile-user-icon')
var barsIcon = document.querySelector('.bars-icon > i')
var listIconsContainer = document.querySelector('.list-icons')
var closeIcon = document.querySelector('.close-icon')
var boardColorCloseIcon = document.querySelector('.board-color-close-icon')
var mobileClockIcon = document.querySelector('.mobile-clock-icon')
var mobileBoardColor = document.querySelector('.mobile-board-colors')
var customIcon = document.querySelector('.mobile-custom-icon')

var mobileOptionElements = document.querySelectorAll('.mobile-board-colors option')
var colorElements = document.querySelectorAll('.color-item')


// Show Form, hide Typing Board
userIcon.onclick = function (e) {
    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'block'
    }
    typingBoard.style.display = 'none'
}


// Show Typing Board, hide Form
clockIcon.onclick = function (e) {
    typingBoard.style.display = 'block'

    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'none'
    }
}


// MOBILE

barsIcon.onclick = function () {
    listIconsContainer.style.left = '0'
}

closeIcon.onclick = function () {
    listIconsContainer.style.left = '-5000px'
    typingBoard.style.display = 'block'
}

// Show Forms on Mobile
mobileUserIcon.onclick = function (e) {
    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'block'
    }
    typingBoard.style.display = 'none'
    listIconsContainer.style.left = ''
}

// Show TypingBoard on Mobile
mobileClockIcon.onclick = function (e) {
    typingBoard.style.display = 'block'

    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'none'
    }
    listIconsContainer.style.left = ''
}

// Show BoardColor on Mobile
customIcon.onclick = function () {
    mobileBoardColor.style.left = '0'
    listIconsContainer.style.left = ''
}

// Close BoardColor on Mobile
boardColorCloseIcon.onclick = function () {
    mobileBoardColor.style.left = '-5000px'
}


// Choose color on Mobile
for (var i = 0; i < mobileOptionElements.length; i++) {
    mobileOptionElements[i].onmouseover = function (e) {
        var colorValues = e.target.value

        if (e.target.closest('.color-item')) {
            (e.target.closest('.color-item')).style.backgroundColor = `${colorValues}`
        }
    }

    mobileOptionElements[i].onmouseout = function (e) {
        if (e.target.closest('.color-item')) {
            e.target.closest('.color-item').style.backgroundColor = ''
        }
    }

    mobileOptionElements[i].onclick = function (e) {
        root.style.setProperty('--main-color', e.target.value)            
        mobileBoardColor.style.left = '-5000px'
    }
}