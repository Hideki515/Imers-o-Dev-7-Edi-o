function adicionarFilme() {
    var filmeFav = document.getElementById("filme").value;
    var elementoListaFilme = document.getElementById("listaFilmes");
    elementoListaFilme.innerHTML = elementoListaFilme.innerHTML + "<img src= " + filmeFav + ">";
    document.getElementById("filme").value = "";
  }
  