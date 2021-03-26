function adicinarFilme () {
        var campoFilmeFavorito= document.querySelector('#filme')
        var filmeFavorito=campoFilmeFavorito.value
        if (filmeFavorito.endsWith('.jpg')) {
             listarFilmesNatela(filmeFavorito)
        }else{
            alert("imagem inválda")
        }
        campoFilmeFavorito.value=""
       
        }
        function listarFilmesNatela(filme) {
            var listaFilmes= document.querySelector("#listaFilmes")
            var elementoFilme="<img src=" + filme + ">"
            listaFilmes.innerHTML=listaFilmes.innerHTML+ elementoFilme
        }
