const nome = document.getElementById('namew')
const email = document.getElementById("email")
const cpf = document.getElementById("cpf")
const date = document.getElementById("date")
const m = document.getElementById("m")
const f = document.getElementById("f")
const tel = document.getElementById("tel")
console.log(nome.value)

function renderPage(){
    const name1 = document.querySelector('.name1')
    const email1 = document.querySelector('.email1')
    const cpf1 = document.querySelector('.cpf1')
    const date1 = document.querySelector('.date1')
    const sex1 = document.querySelector('.sex1')
    const tel1 = document.querySelector('.tel1')
    const hid = document.querySelector('.div-hidden')
    console.log(nome.value)
    if(nome.value=="" || email.value=="", cpf.value=="", date.value=="", tel.value==""){
        nome.classList.remove('div_normal')
        cpf.classList.remove('div_normal')
        date.classList.remove('div_normal')
        email.classList.remove('div_normal')
        tel.classList.remove('div_normal')
    }else{
        hid.classList.remove('div-hidden')
        name1.textContent = nome.value
        email1.textContent = email.value
        cpf1.textContent = cpf.value
        date1.textContent = date.value
        tel1.textContent = tel.value

        nome.classList.add('div_normal')
        cpf.classList.add('div_normal')
        date.classList.add('div_normal')
        email.classList.add('div_normal')
        tel.classList.add('div_normal')
    }
}