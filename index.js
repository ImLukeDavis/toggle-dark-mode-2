const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black'
        body.style.transition = '2s'

    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'

    }
})



//if user selected dark mode, keep dark mode in local storage
//if user selected light mode, keep light mode in local storage

