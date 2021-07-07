const header = document.querySelector('.container.nav-container');

header.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
})
header.addEventListener('mouseleave', (event) =>{
    event.target.style.backgroundColor = 'white';

});


const footer = document.querySelector('.footer');

footer.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
})
footer.addEventListener('mouseleave', (event) =>{
    event.target.style.backgroundColor = 'white';

});