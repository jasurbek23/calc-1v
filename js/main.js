const themeBtn = document.querySelector('#theme-btn')
const themeBtnImg = document.querySelector('#theme-btn img')
const htmlTag = document.documentElement

themeBtn.addEventListener('click', () => {
    if (htmlTag.getAttribute('data-theme') == 'dark') {
        
        htmlTag.setAttribute('data-theme', 'light')
        themeBtnImg.setAttribute('src', './images/dark-theme-btn.svg')
        
    } else {
        
        htmlTag.setAttribute('data-theme', 'dark')
        themeBtnImg.setAttribute('src', './images/light-theme.btn.svg')
        
    }
})

const btn = document.querySelectorAll('.btn');
const result = document.querySelector('.result');


btn.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            result.innerText = '';
        } else if (item.id == 'backspace') {
            let string = result.innerText.toString();
            result.innerText = string.substr(0, string.length - 1);
        } else if (result.innerText != '' && item.id == 'equal') {
            result.innerText = eval(result.innerText);
        } else if (result.innerText == '' && item.id == 'equal') {
            result.innerText = 'Empty!';
            setTimeout(() => (result.innerText = ''), 2000);
        } else {
            result.innerText += item.id
        }
    }
})



