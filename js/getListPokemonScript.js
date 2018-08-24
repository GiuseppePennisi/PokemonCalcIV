$(document).ready(function(){

    $('body').css('display', 'none');
    $('body').fadeIn(500);


});
$.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=949", function (pokemonList) {

    var rowElement = document.createElement("div");
    rowElement.setAttribute("class","row");
    rowElement.setAttribute("id", "rowWrapper" );
    for (i = 0; i < pokemonList.results.length; i=i+6) {



        $("#listPokemon").append(rowElement);

        for (j = i; j < i+6; j++) {
            var namePokemon = pokemonList.results[j].name;
            var col = document.createElement("div");
            col.setAttribute("class","col-sm-2");
            col.setAttribute("id",namePokemon);


            $("#rowWrapper").append(col);

                //create a card
                var card = document.createElement("div");
                card.setAttribute("class","card");

                card.setAttribute("id","card"+namePokemon);
                $("#"+namePokemon).append(card);


                //create card image
                var cardImage = document.createElement("img");
                cardImage.setAttribute("class","card-img-top");
                cardImage.setAttribute("id",namePokemon);
                var url = pokemonList.results[j].url;
                var idPokemon = url.match(/\d/g);
                idPokemon.shift();
                idPokemon = idPokemon.join("");
                cardImage.setAttribute("src","../Sprites/"+idPokemon+".png");

                $("#card"+namePokemon).append(cardImage);

                //create card body

                var cardBody = document.createElement("div");
                cardBody.setAttribute("class","card-body");
                cardBody.setAttribute("id","body"+namePokemon);
                $("#card"+namePokemon).append(cardBody);

                // create card title


                $("#body"+namePokemon).append("<h6 class='card-title'  href='url' style='text-align: center'>" + namePokemon.toString().toUpperCase()+"</h6>");

        }

    }

})







