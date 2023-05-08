const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.button')
const iconClose = document.querySelector('.icon-close')
const major = document.querySelector('main')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});


loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});


iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

const userInfo = (a) => {
    const signupForm = document.getElementById('feedback')
    const loginForm = document.getElementById('forma')
    signupForm && signupForm.addEventListener('submit',(event) => {
        event.preventDefault()
        const user = {}
       Array.from(signupForm.children).filter(el => el.className === 'input-box')
        .map(e => e.children[0]).map(e => e.children[0])
        .forEach(el => {
            user[el.type] = el.value
        });
        localStorage.setItem('user', JSON.stringify(user))
        wrapper.classList.remove('active')


    })
    loginForm && loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const user = {}
        Array.from(loginForm.children).filter(el => el.className === 'input-box')
         .map(e => e.children[0]).map(e => e.children[0])
         .forEach(el => {
             user[el.type] = el.value
         });
         const localUser = JSON.parse(localStorage.getItem('user'));
         if(user.email === localUser.email && user.password === localUser.password){
            wrapper.classList.add('remove')
            wrapper.classList.remove('active-popup')
            const newChapter = document.createElement('div')
            const newText = document.createElement('h1')
            const newData = document.createElement('p')
            newData.textContent = localUser.text
            newData.setAttribute('class', 'new-name')
            newChapter.setAttribute('class', 'new-chapter')
            newText.setAttribute('class', 'new-text')
            newText.textContent = 'Welcome'
            major.appendChild(newChapter)
            newChapter.appendChild(newText)
            newChapter.appendChild(newData)
         }else {
            alert('Неправильный логин или пароль')
         }
    })
}
userInfo()

