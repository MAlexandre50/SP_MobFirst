$(document).ready(function(){

    //Affichage du menu
    $('.menu-elements').hover(function(){
        $(this).addClass('activated');
        $('.deployed-menu').show();
    }, function(){
        $('.menu-elements').removeClass('activated');
        //$('.deployed-menu').hide();
    });

    $('.deployed-menu').hover(function(){
        $('.deployed-menu').show();
    }, function(){
        $('.deployed-menu').hide();
    });



    $('.menu-trigger').click(function(){
        $('.menu-open').toggle();
        $('.menu-close').toggle();
        $('.search').toggle();
    });

    $('.mob-cat-link').click(function(){
        $(this).children().toggle();

    })


});
