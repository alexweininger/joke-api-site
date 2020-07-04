async function getJoke() {
    const joke = document.querySelector('#joke');

    if (joke) {
        let response = await fetch("https://joke-api.azurewebsites.net/api/joke/", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "cross-site",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://github.com/alexweininger/joke-api",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "no-cors",
            "credentials": "omit"
        });
        console.log(response);
        let jokeJson = JSON.parse(response);

        joke.innerHTML = jokeJson.setup;
    }
}

getJoke();
