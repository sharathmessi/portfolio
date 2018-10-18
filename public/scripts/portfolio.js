/* global $ */
var pathname = window.location.pathname;

if(pathname == "/contact")
{
       $(".current a").removeClass("text-dark");
       $(".nav-item").removeClass("current");
       $("#contact").addClass("current");
       $("#contact a").addClass("text-dark");
}
else if(pathname == "/about"){
          $(".current a").removeClass("text-dark");
       $(".nav-item").removeClass("current");
       $("#about").addClass("current");
       $("#about a").addClass("text-dark");
}
else if(pathname == "/works"){
          $(".current a").removeClass("text-dark");
       $(".nav-item").removeClass("current");
       $("#works").addClass("current");
       $("#works a").addClass("text-dark");
}
