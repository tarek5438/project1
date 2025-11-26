let counter = document.getElementById('counter');
let click = document.getElementById('click');
let reset = document.getElementById('reset');
let x = 0;

click.addEventListener('click', function (){
    x++;
    counter.innerText = x;
});

reset.addEventListener('click', function () {
    x = 0;
    counter.innerText = x
})

