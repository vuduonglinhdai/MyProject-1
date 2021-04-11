var userIcon = document.querySelector('.user-icon')
var clockIcon = document.querySelector('.clock')
var logOutIcon = document.querySelector('.logOut-icon')
var mobileLogOutIcon = document.querySelector('.mobileLogOut-icon')
var typingBoard = document.querySelector('.container')
var layout = document.querySelector('.layout')
var forms = document.querySelectorAll('.form')

// User Info
var userBackIcon = document.querySelector('.user-back-icon')
var userInfoContainer = document.querySelector('.user-info-container')
var userInfoIcon = document.querySelector('.user-info-icon')
var userName = document.querySelector('.user-name')
var userEmail = document.querySelector('.user-email')
var userAge = document.querySelector('.user-age')
var userGender = document.querySelector('.user-gender')

// MOBILE 
var mobileUserIcon = document.querySelector('.mobile-user-icon')
var mobileUserInfoIcon = document.querySelector('.mobile-user-info-icon')
var barsIcon = document.querySelector('.bars-icon > i')
var listIconsContainer = document.querySelector('.list-icons')
var closeIcon = document.querySelector('.close-icon')
var boardColorCloseIcon = document.querySelector('.board-color-close-icon > i')
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

// LogOut PC
logOutIcon.onclick = function () {
    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'block'
    }
    typingBoard.style.display = 'none'

    logOutIcon.classList.add('hide')
    userIcon.classList.remove('hide')
    userInfoIcon.classList.add('hide')
}


// LogOut Mobile

mobileLogOutIcon.onclick = function () {
    for (var b = 0; b < forms.length; b++) {
        forms[b].style.display = 'block'
    }
    typingBoard.style.display = 'none'

    mobileUserIcon.classList.remove('hide')
    mobileUserInfoIcon.classList.add('hide')
    mobileLogOutIcon.classList.add('hide')
    listIconsContainer.style.left = '-5000px'
}


// Show UserInfo
userInfoIcon.onclick = function () {
    document.querySelector('nav').classList.add('hide')
    document.querySelector('.main-body').classList.add('hide')
    document.querySelector('footer').classList.add('hide')
    userInfoContainer.classList.remove('hide')

    document.querySelector('nav').style.transition = '0.5s'
    document.querySelector('.main-body').style.transition = '0.5s'
    document.querySelector('footer').style.transition = '0.5s'


}

// Hide UserInfo 
userBackIcon.onclick = function () {
    document.querySelector('nav').classList.remove('hide')
    document.querySelector('.main-body').classList.remove('hide')
    document.querySelector('footer').classList.remove('hide')
    userInfoContainer.classList.add('hide')
}

// Show UserInfo on Mobile

mobileUserInfoIcon.onclick = function () {
    listIconsContainer.style.left = '-5000px'
    userInfoContainer.classList.remove('hide')

    document.querySelector('nav').classList.add('hide')
    document.querySelector('.main-body').classList.add('hide')
    document.querySelector('footer').classList.add('hide')
    userInfoContainer.classList.remove('hide')

}


var timeout;
document.onmousemove = function () {
    clearTimeout(timeout);
    timeout = setInterval(function () {
        layoutNotice.style.display = 'block'
    }, 25000);
}

document.onclick = function () {
    layoutNotice.style.display = 'none'
}

document.onkeypress = function () {
    layoutNotice.style.display = 'none'
}   

