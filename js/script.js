var userIcon = document.querySelector('.user-icon')
var clockIcon = document.querySelector('.clock')
var typingBoard = document.querySelector('.container')
var forms = document.querySelectorAll('.form')


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