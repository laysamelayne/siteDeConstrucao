function closeMenu (){
    document.body.classList.remove('show')
}

function openMenu (){
    document.body.classList.add('show')
}

function openBackToTop (){
    if (scrollY >= 900) {
        backToTop.classList.add('open')
    }
    else{
        backToTop.classList.remove('open')
    }
}


const analise = document.getElementById('email')
    


    function onclickSubmit() {
       alert('Entraremos em contato')
}
