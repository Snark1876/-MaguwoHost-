 $(document).ready(function() {
   $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $("#main-mnu").slideToggle();
    return false;
 });

$(".foot-mnu").click(function() {
    $(this).toggleClass("on");
    $("#foot-mnu").slideToggle();
    return false;
 });
});


 