const body = document.querySelector('body');
const button = document.querySelectorAll('.button');

button.forEach(element => {
    console.log(element);
    element.addEventListener('click', function(event) {
        console.log(event.target.id);
        switch (event.target.id) {
            case 'grey':
            case 'white':
            case 'blue':
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
            default:
                break;
        }
    });
});
