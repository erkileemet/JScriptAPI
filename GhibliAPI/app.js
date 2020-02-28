fetch('https://ghibliapi.herokuapp.com/films')
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
    const movies = document.getElementById('movies')
    data.forEach(movie => {
        console.log(movie)
        let movieDiv = document.createElement("div")
        movieDiv.innerHTML = '<div class = "title">' + movie.title + '</div>' + '<div class="desc">' +  movie.description + '</div>'
        movieDiv.classList.add('movie');
        movies.append(movieDiv)


    });
})