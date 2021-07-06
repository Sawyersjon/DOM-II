const header = document.querySelector('.container.nav-container');

header.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
})
header.addEventListener('mouseleave', (event) =>{
    event.target.style.backgroundColor = 'white';

});
const destination = document.querySelector('.btn');
const destinationArray = Array.from(destination)

destinationArray.forEach('mouseenter', (event) => {
    event.target.style.backgroundColor = 'purple'
});