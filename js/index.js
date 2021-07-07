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

const destination = document.querySelector('.content-pick')
const title = destination.querySelectorAll('.btn');

Array.from(title).forEach(elem => {
    elem.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'purple';
    })
})
Array.from(title).forEach(elem => {
    elem.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = '#17A2B8';
        })
})