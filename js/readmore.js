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
//    Team info
  
    $(".team-text p").hide();
    
    //    claramwanje
    $( ".team-text.cm" ).hover(
        function() {
            $( ".team-text.cm p" ).fadeIn('slow');
            $( this ).addClass("_hover").fadeIn('slow');
            
        }, 
        function(){
            $( ".team-text.cm p" ).fadeOut();
            $( this ).removeClass("_hover");
            
        }); 
    
//  doreenzaki
    $( ".team-text.dz" ).hover(
        function() {
            $( ".team-text.dz p" ).fadeIn('slow');
            $( this ).addClass("_hover").fadeIn('slow');
            
        }, 
        function(){
            $( ".team-text.dz p" ).fadeOut();
            $( this ).removeClass("_hover");
            
        }); 
    
//  anthonyodhiambo
    $( ".team-text.ao" ).hover(
        function() {
            $( ".team-text.ao p" ).fadeIn('slow');
            $( this ).addClass("_hover").fadeIn('slow');
            
        }, 
        function(){
            $( ".team-text.ao p" ).fadeOut();
            $( this ).removeClass("_hover");
            
        }); 
    
    
});
