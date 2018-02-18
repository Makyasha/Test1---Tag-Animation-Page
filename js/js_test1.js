function initialize(){
  //Image
  $(".ini_image").attr('src', 'https://images.pexels.com/photos/65554/pexels-photo-65554.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb');
  $(".ini_image").attr('alt', 'Cute Doggie');
  //text
  $(".presentation p").text("We can always be the best!");
  //href setup
  /*
  $('a[href^="#"]').each(function(){
     $(this).attr('onclick', 'goTo("'+$(this).attr("href")+'")');
   });*/
}

function goTo(id){
  animateScroll("#top");
  setTimeout(function (){
    //Div switch
    $('main:not(hide)').addClass("hide");
    $(id).removeClass("hide");
    //Nav switch
    $('a.active').removeClass("active");
    $('a[onclick*="'+id+'"').addClass("active");
  }, 499);
}

$('a[href^="#"]').click(function(event){
  console.log($(this).attr('href'));
  animateScroll($.attr(this, 'href'));
});

function animateScroll(attr){
  $('html, body').animate({
    scrollTop: $(attr).offset().top
  }, 500);
}

$(document).ready(function() {
  initialize();
});
