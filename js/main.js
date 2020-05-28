/**
 * 
 * 
 * 
 * 
*/

const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(()=>{

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    $($toggleCollapse).click(()=>{
        $nav.toggleClass('collapse');
    });


    //owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        responsive:responsive
    });


    ///Click to scroll top

    $('.move-up span').click(()=>{
        $('html,body').animate({
            scrollTop:0
        },1000);
    });




    ///AOS Instance
    AOS.init();

});