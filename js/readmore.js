$(document).ready(function() {
        
//    (function( $ ){
//       $.fn.readmore = function() {
//            $("._showing").fadeToggle('slow');
//            $(".clickable.cl1").toggle();
//            return this;
//       }; 
//    })( jQuery );
//
//    
//    
//    //to show the hidden and hide the initial and vice versa
//    $(".clickable.cl1").click().readmore ();
//    
//   
    
//    to show the hidden and hide the initial and vice versa
    $("#s1 .cl1").click(function() {
        $("#s1 ._showing").fadeToggle('slow');
        $("#s1 .cl1").hide();
    });
    
    $("#s1 .cl2").click(function() {
//        $(".clickable.cl2").hide();
        $("#s1 ._showing").fadeOut();
        $("#s1 .cl1").fadeIn();
        
    });
    
    $("#s2 .cl1").click(function() {
        $("#s2 ._showing").fadeToggle('slow');
        $("#s2 .cl1").hide();
    });
    
    $("#s2 .cl2").click(function() {
//        $(".clickable.cl2").hide();
        $("#s2 ._showing").fadeOut();
        $("#s2 .cl1").fadeIn();
        
    });
    
    $("#s3 .cl1").click(function() {
        $("#s3 ._showing").fadeToggle('slow');
        $("#s3 .cl1").hide();
    });
    
    $("#s3 .cl2").click(function() {
//        $(".clickable.cl2").hide();
        $("#s3 ._showing").fadeOut();
        $("#s3 .cl1").fadeIn();
        
    });
    
});
