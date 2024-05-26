var mode = "white";
const mainbg = document.querySelector('.main');
const secondbg = document.querySelector('.main-2');
const branding = document.querySelector('.branding');
const brandingText = document.querySelector('.brandingText');
const lightDarkBtn = document.querySelector('.light-dark-btn');
const switcher = document.querySelector('.switcher');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const circle = document.querySelector('.circle');
const button = document.querySelectorAll('.button');
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let interval;
let milisec = 0;
let sec = 0;
let min = 0;

start.addEventListener('click', () => {
    interval = setInterval(() => {
        milisec++;
        if (milisec === 100) {
            milisec = 0;
            sec++;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
        }
        timer.innerHTML = `${min}:${sec}:${milisec}`;
    }, 10);
});

stop.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    timer.innerHTML = '0:0:0';
});

lightDarkBtn.addEventListener('click', () => {
    if (mode === "white") {
        mode = "black";
        mainbg.style.backgroundColor = "rgb(22, 22, 22)";
        secondbg.style.backgroundColor = "rgb(22, 22, 22)";
        branding.style.backgroundColor = "rgb(45, 45, 45)";
        branding.style.boxShadow = 'none';
        brandingText.style.color = "white";
        lightDarkBtn.style.backgroundColor = "rgb(45, 45, 45)";
        lightDarkBtn.style.boxShadow = 'none';
        switcher.innerHTML = 'Dark Mode :';
        switcher.style.color = "white";
        sun.style.display = "none";
        moon.style.display = "block";
        circle.style.backgroundColor = "rgb(45, 45, 45)";
        circle.style.boxShadow = 'none';
        timer.style.color = "white";
        button.forEach(button => {
            button.style.backgroundColor = "rgb(45, 45, 45)";
            button.style.boxShadow = 'none';
            button.style.color = "white";
        });
    }
    else if (mode === "black") {
        mode = "white";
        mainbg.style.backgroundColor = "";
        secondbg.style.backgroundColor = "";
        branding.style.backgroundColor = "";
        branding.style.boxShadow = '';
        brandingText.style.color = "";
        lightDarkBtn.style.backgroundColor = "";
        lightDarkBtn.style.boxShadow = '';
        switcher.innerHTML = 'Light Mode :';
        switcher.style.color = "";
        sun.style.display = "block";
        moon.style.display = "none";
        circle.style.backgroundColor = "";
        circle.style.boxShadow = '';
        timer.style.color = "";
        button.forEach(button => {
            button.style.backgroundColor = "";
            button.style.boxShadow = '';
            button.style.color = "";
        });
    };
});

button.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (mainbg.style.backgroundColor === 'rgb(231, 231, 231)') {
            element.style.backgroundColor = 'rgb(32, 178, 170)';
            mainbg.style.backgroundColor = 'rgb(231, 231, 231)';
        } else if (mainbg.style.backgroundColor === 'rgb(22, 22, 22)') {
            element.style.backgroundColor = 'rgb(21, 121, 116)';
            mainbg.style.backgroundColor = 'rgb(22, 22, 22)';
        }
    });
});

button.forEach(element => {
    element.addEventListener('mouseout', () => {
        if (mainbg.style.backgroundColor === 'rgb(231, 231, 231)') {
            element.style.backgroundColor = 'rgb(236, 236, 236)';
            mainbg.style.backgroundColor = 'rgb(231, 231, 231)';
        } else if (mainbg.style.backgroundColor === 'rgb(22, 22, 22)') {
            element.style.backgroundColor = 'rgb(46, 46, 46)';
            mainbg.style.backgroundColor = 'rgb(22, 22, 22)';
        }
    });
});
