
/* Vanilla JS AJAX request */
const dogForm = document.querySelector('.dog-image-info');

dogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const numberOfDogs = document.querySelector('#number-of-dogs').value;
    const URL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
    const settings = {
        method: 'GET'
    };

    $.get(URL, settings)
        .done((data) => {
            const dogResults = document.querySelector('.dog-results');
            dogResults.innerHTML = "";
            data.message.forEach((image) => {
                dogResults.innerHTML += `<img src="${image}" alt="Dog image" class="dog-image">`;
            });
        })
        .fail((error) => {
            console.log(error);
        });
    /*
    fetch(URL, settings)
        .then((response) => {
            if(response.status === 200){
                return response.json();
            }
            throw new Error("Something went wrong!");
        }).then((data) => {
            const dogResults = document.querySelector('.dog-results');
            dogResults.innerHTML = "";
            data.message.forEach((image) => {
                dogResults.innerHTML += `<img src="${image}" alt="Dog image" class="dog-image">`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
    */
});

/* jQuery AJAX request */
$('.news-info').on('submit', (event) => {
    event.preventDefault();
    const $searchCriteria = $('#search-criteria').val();
    const $numberOfNews = $('#number-of-news').val();
    const API_KEY = 'YOUR API KEY GOES HERE!!!';

    $.ajax({
        url: 'https://newsapi.org/v2/everything',
        data: {
            q: $searchCriteria,
            pageSize: $numberOfNews
        },
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        },
        success: (data) => {
            $('.news-results').empty();
            data.articles.forEach((article) => {
                $('.news-results').append(`
                    <h2> ${article.title} </h2>
                    <div>
                        <img src="${article.urlToImage}" alt="${article.title}">
                    </div>
                    <h4> ${article.author} </h4>
                    <p> ${article.content} </p>
                    <a href="${article.url}" target="_blank"> Full article </a>
                `);
            });
            if(data.articles.length === 0){
                $('.news-results').html(`<h1 class="no-results"> No results with your search criteria: "${$searchCriteria}" </h1>`);
            }
        },
        error: (err) => {
            console.log(err);
        }
    })

});