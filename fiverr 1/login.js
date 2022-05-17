let user = document.getElementById('user')
let show = document.getElementsByClassName('show-user')[0]
let usercenter = document.getElementsByClassName('usercenter')[0]
let passwordcenter = document.getElementsByClassName('passwordcenter')[0]
let userlebel = document.getElementById('userlebel')
let hidepassword = document.getElementsByClassName('hide-password')[0]
let avisible = document.getElementsByClassName('avisible')[0]
let password = document.getElementById('password')

window.onload = function () {
  document.getElementById('user').focus()
  document.getElementById('password').focus()
}

function changing(e) {
  let target = e.target.value
  show.innerHTML = target
  let arr = target.split('')
  if (arr.length == 8) {
    show.style.display = 'block'
    passwordcenter.style.display = 'block'
    user.style.display = 'none'
    userlebel.style.display = 'none'
    hidepassword.style.display = 'block'
  }
}

function pasChanging(e) {
  let target = e.target.value
  if (target.split('').length == 4) {
    avisible.style.display = 'block'
  } else {
    avisible.style.display = 'none'
  }
}

password.addEventListener('input', pasChanging)
password.addEventListener('propertychange', pasChanging)
user.addEventListener('input', changing)
user.addEventListener('propertychange', changing)
