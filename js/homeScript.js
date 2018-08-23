
$.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=949", function (pokemonList) {



    for (i = 0; i < pokemonList.results.length; i=i+6) {

        var rowElement = document.createElement("div");
        rowElement.setAttribute("class","row");
        rowElement.setAttribute("id", "row" + i/6);
        rowElement.setAttribute("style","background-color:yellow;");
        $("#listPokemon").append(rowElement);

        for (j = i; j < i+6; j++) {
            var col = document.createElement("div");
            col.setAttribute("class","col-sm");
            col.setAttribute("id",pokemonList.results[j].name);
            var namePokemon = pokemonList.results[j].name;
            col.innerHTML = pokemonList.results[j].name;
            $("#row"+i/6).append(col);

                var img = document.createElement("img");
                var url = pokemonList.results[j].url;
                var idPokemon = url.match(/\d/g);
                console.log("preShift "+idPokemon);
                idPokemon.shift();
                idPokemon = idPokemon.join("");
                img.setAttribute("src","../Sprites/"+idPokemon+".png");
                $("#"+namePokemon).append(img);



        }

    }

})





