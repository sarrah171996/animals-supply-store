$(document).ready(function () {
    $('#searchIcon').click(function () { 
       $(this).toggleClass('fa-times');
       $('#search-box').toggleClass('active')
        
    });


    $('.menu').click(function () { 
       $(this).toggleClass('fa-times') ;
       $('.nav-bar').toggleClass('nav-toggle')
        
    });


    $(window).scroll(function () {  
        $('.menu').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle')

        $('#search-box').removeClass('active')
        $('#searchIcon').removeClass('fa-times')

    
        if($(window).scrollTop() > 0){
            $('header').addClass('sticky')
        }else{
            $('header').removeClass('sticky')
     
        }

    });    


});

