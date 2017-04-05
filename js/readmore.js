$(document).ready(function() {
 
//    ========================================================
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
    

    //    ========================================================
    //    Team info on click
  
    $(".team-text p").hide();
    
    //  claramwanje
    $("#claramwanje .cl1").click(function() {
        $(".team-text.cm").addClass("_hover").fadeIn('slow');
        $(".team-text.cm p" ).fadeIn('slow');
    });

    $("#claramwanje .cl2").click(function() {
        $( ".team-text.cm p" ).hide();
        $(".team-text.cm").removeClass("_hover");
    });

    //  doreenzaki
    $("#doreenzaki .cl1").click(function() {
        $(".team-text.dz").addClass("_hover").fadeIn('slow');
        $(".team-text.dz p" ).fadeIn('slow');
    });

    $("#doreenzaki .cl2").click(function() {
        $( ".team-text.dz p" ).hide();
        $(".team-text.dz").removeClass("_hover");

    });

    
    //  claramwanje
    $("#anthonyOdhiambo .cl1").click(function() {
        $(".team-text.ao").addClass("_hover").fadeIn('slow');
        $(".team-text.ao p" ).fadeIn('slow');
    });
    
    $("#anthonyOdhiambo .cl2").click(function() {
        $( ".team-text.ao p" ).hide();
        $(".team-text.ao").removeClass("_hover");

    });
    
});
