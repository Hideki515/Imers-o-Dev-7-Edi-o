var listarFilmes = ["https://th.bing.com/th/id/OIP.tYEaZWDUWoXLaN0w5j2DKQHaKi?pid=ImgDet&rs=1",
 "https://cdn.myanimelist.net/images/anime/1622/139331.jpg",
 "https://cdn.myanimelist.net/images/anime/1661/137709.jpg",  "https://cdn.myanimelist.net/images/anime/1506/138529.jpg"]

// listarFilmes[0] = "https://th.bing.com/th/id/OIP.tYEaZWDUWoXLaN0w5j2DKQHaKi?pid=ImgDet&rs=1"

// listarFilmes[1] = "https://cdn.myanimelist.net/images/anime/1622/139331.jpg"

// listarFilmes[2] = "https://cdn.myanimelist.net/images/anime/1661/137709.jpg"


for(var i = 0; i < listarFilmes.length; i++)
  {
    document.write('<img  src=' + listarFilmes[i] + '>');
  }

