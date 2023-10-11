
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_nav').toggleClass('active')
        $('body').toggleClass('lock')
    })
})
/*Нужно добовлять библиотеку jquery БЕЗ ЭТОГО НЕ РАБОТАЕТ */
