fetch('https://api.icndb.com/jokes')
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
    const jokes = document.getElementById("joke")
    data.value.forEach(joke_value => {
        console.log(joke_value)
        let jokeDiv = document.createElement("div")
        jokeDiv.innerHTML = '<div>' + joke_value.id + '.' + ' ' + joke_value.joke + '</div>'
        jokeDiv.classList.add('joke');
        jokes.append(jokeDiv)
    });
})