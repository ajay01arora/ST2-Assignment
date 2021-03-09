const data = [
  {
    "title": "Mad Max: Fury Road",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ]
  },
  {
    "title": "The Hunger Games: Mockingjay Part 1",
    "genre": [
      "Adventure",
      "Thriller"
    ]
  },
  {
    "title": "Jurassic World",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ]
  },
  {
    "title": "Everest",
    "genre": [
      "Drama",
      "Thriller"
    ]
  },
  {
    "title": "Insurgent",
    "genre": [
      "Adventure"
    ]
  },
  {
    "title": "Sicario",
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ]
  }
]
function display(arr)
{
    var movies = document.getElementById('movies');   
    movies.innerHTML = '';
    
    arr.forEach(m => {
        var fig = document.createElement('figure');
        var figCaption = document.createElement('figcaption');
        var img = document.createElement('img');
        img.src = "https://media-doselect.s3.amazonaws.com/generic/gOMxPQpZ5j2Ox5nOgJ7L0wk0R/movies.png";
        
        figCaption.innerHTML = m.genre.join();
        
        fig.appendChild(img);
        fig.appendChild(figCaption);
        
        movies.appendChild(fig);
    })
}

var inp = document.getElementById('search');

function search(value)
{
    // var arr = data.filter(m => m.genre.find( g => g.toLowerCase() == value.toLowerCase()));
    // console.log(arr);
    // display(arr);
    var arr = [];
    data.forEach(m =>
    {
        m.genre.forEach( g =>
        {
            if(g.toLowerCase() === value.toLowerCase())
            {
                arr.push(m);
            }
        })
    })
    display(arr);
    
}

inp.addEventListener('keyup',function(){
    search(inp.value);
})

document.addEventListener('DOMContentLoaded', function(){
    display(data);    
})

