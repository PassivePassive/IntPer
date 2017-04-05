$(document).ready(function() {

//    ========================================================
//    Team info on hover
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
