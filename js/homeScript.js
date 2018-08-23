
$.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=12", function (pokemonList) {


    console.log(pokemonList.results.length)

    for (i = 0; i < pokemonList.results.length; i=i+6) {
        console.log("ciao");
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
            console.log(i+" "+j);
            col.innerHTML = pokemonList.results[j].name;
            $("#row"+i/6).append(col);

                var img = document.createElement("img");
                var url = pokemonList.results[j].url;
                var idPokemon = url.match(/\d/g);
                idPokemon.shift();
                idPokemon.join("");
                console.log(idPokemon);
                img.setAttribute("src","../Sprites/"+idPokemon+".png");
                console.log(namePokemon)
                $("#"+namePokemon).append(img);



        }

    }

})





