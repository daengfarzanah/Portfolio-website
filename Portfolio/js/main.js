//$('.btn_nav').click(function() {
//   
//    $('.maincontainer').addClass('animate_content');
//    $('.container_home').fadeOut(100).delay(2800).fadeIn();
//    
//    setTimeout(function() {
//    $('.maincontainer').removeClass('animate_content');
//  }, 3200);
//
//  //remove fadeIn class after 1500ms
//  setTimeout(function() {
//    $('.maincontainer').removeClass('fadeIn');
//  }, 1500);
//    
//});
//
//
//$('.about').click(function() {
//  setTimeout(function() {
//    $('.container_about').addClass('fadeIn');
//  }, 1500);
//});


$(function(){
    
    $(".close").on("click", close);
    $(".vr_close").on("click", close);
    $(".card-color-0").on("click",work1);
    $(".card-color-1").on("click",work2);
    $(".card-color-2").on("click",work3);
    $(".card-color-3").on("click",work4);
    $(".card-color-4").on("click",work5);
    $(".card-color-5").on("click",work6);
    $(".card-color-6").on("click",work7);
    $(".card-color-7").on("click",work8);
    $(".card-color-8").on("click",work9);
    $(".card-color-9").on("click",work10);
    $(".card-color-11").on("click",work11);
    $(".card-color-10").on("click",work12);
    
});


function close() {
    $(".work1, .work2, .work3, .work4, .work5, .work6, .work7, .work8, .work9, .work10, .work11, .work12").css("display","none");
    $(".maincontainer").css("display","block");
}

function vr_close() {
    $(".work1, .work2, .work3, .work4, .work5, .work6, .work7, .work8, .work9, .work10, .work11, .work12").css("display","none");
    $(".maincontainer").css("display","block");
}

function work1() {
    $(".work1").css("display","block");
    $(".maincontainer").css("display","none");

}

function work2() {
    $(".work2").css("display","block");
    $(".maincontainer").css("display","none");
}

function work3() {
    $(".work3").css("display","block");
    $(".maincontainer").css("display","none");
}

function work4() {
    $(".work4").css("display","block");
    $(".maincontainer").css("display","none");
}

function work5() {
    $(".work5").css("display","block");
    $(".maincontainer").css("display","none");
}

function work6() {
    $(".work6").css("display","block");
    $(".maincontainer").css("display","none");
}

function work7() {
    $(".work7").css("display","block");
    $(".maincontainer").css("display","none");
}

function work8() {
    $(".work8").css("display","block");
    $(".maincontainer").css("display","none");
}

function work9() {
    $(".work9").css("display","block");
    $(".maincontainer").css("display","none");
}

function work10() {
    $(".work10").css("display","block");
    $(".maincontainer").css("display","none");
}

function work11() {
    $(".work11").css("display","block");
    $(".maincontainer").css("display","none");
}

function work12() {
    $(".work12").css("display","block");
    $(".maincontainer").css("display","none");
}

$(window).scroll(function(){
    
    var scrollPosition = $(window).scrollTop();
    var targetPosition = $(".aboutMe").position().top;
    
    if(scrollPosition >= (targetPosition))
        {
            $(".pTop").addClass(" slide-in");
        }
});



// Top button

//$(".top").click(function(){
//        $('html, body').animate({
//            scrollTop: $(".maincontainer").offset().top},1000);
//    })
//    
//    $(window).scroll(function() {
//    if ($(this).scrollTop() >= 700) {       
//        $('.top').fadeIn(200);    
//    } else {
//        $('.top').fadeOut(200);   
//    }
//});


