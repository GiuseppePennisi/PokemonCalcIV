
$(document).ready(function(){
    $("#pkmn").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#listPokemon *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });

        $("#listPokemon img").filter(function() {
            $(this).toggle($(this).attr("id").toLowerCase().indexOf(value)>-1);
         });


    });
});


