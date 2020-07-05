async function getJoke() {
    const setup = document.querySelector('#setup');
    const punchline = document.querySelector('#punchline');

    if (setup) {
        const response = await fetch("https://joke-api.azurewebsites.net/api/joke/", {
            method: "GET",
            credentials: "same-origin"
        });
        const jokeJson = await response.json();
        setup.innerHTML = jokeJson.setup;
        punchline.innerHTML = jokeJson.punchline;
    }
}

getJoke();
