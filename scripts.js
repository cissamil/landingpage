/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
document.addEventListener('DOMContentLoaded', ()=>{
    //seleciona o formulario na dom
    const form=document.querySelector('form');
    //adiciona um evento de submit
    form.addEventListener('submit', async(event)=>{
        //prevenir que a pagina recarregue ao enviar o form
        event.preventDefault();

        //coletar o valor dos campos dos inputs do formulario
        const textValue=document.getElementById('text');
        const emailValue= document.getElementById('email')?.value;

        //criar um obj com os dados do formulário
        const formData={
            text: textValue,
            emailValue:emailValue,
        }
        //exibe os dados coletados no console
        console.log('dados coletadors', formData);

        //utilizar a fetch api para enviar os dados para o servidor
        //utilizando o metodo post

        const response=await fetch('http://www.api.com/cadastro',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body:JSON.stringigy(formData)

           
        


        })


    })
})

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
