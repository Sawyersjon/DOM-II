// Your code goes here
let header = document.querySelector('.container.nav-container');

header.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
header.addEventListener('mouseleave', (event) =>{
    event.target.style.backgroundColor = 'white';
})
});

let anchor = document.querySelector('.nav-link');

anchor.addEventListener('click', (event) => {
    event.onclick.style.fontWeight = 'bold';
})