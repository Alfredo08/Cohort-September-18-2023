
/* Vanilla JavaScript AJAX request */
const dogForm = document.querySelector('.dog-image-info');

dogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const numberOfDogs = document.querySelector('#number-of-dogs').value;
    const URL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
    const settings = {
        method: 'GET'
    };
    /*
    if(numberOfDogs < 0 ){
        alert("Please provide a positive number");
        return;
    }
    */

    $.get(URL, settings)
        .done(data => {
            const dogResults = document.querySelector('.dog-results');
            dogResults.innerHTML = "";
            data.message.forEach(image => {
                dogResults.innerHTML += `<img src="${image}" alt="Dog image" class="dog-image">`;
            });
        })
        .fail(error => {
            console.log("Something went wrong", error);
        });

    /*
    fetch(URL, settings)
        .then(response => {
            if(response.status === 200){
                return response.json();
            }
            throw new Error(response.json());
        })
        .then(data => {
            const dogResults = document.querySelector('.dog-results');
            dogResults.innerHTML = "";
            data.message.forEach(image => {
                dogResults.innerHTML += `<img src="${image}" alt="Dog image" class="dog-image">`;
            });
        })
        .catch(error => {
            console.log("Something went wrong", error);
        });
    */

});

/* jQuery AJAX request */
const $newsForm = $('.news-info');

$($newsForm).on('submit', (event) => {
    event.preventDefault();
    $searchTerm = $('#search-term').val();

    /*
    $.ajax({
        url: `https://newsapi.org/v2/everything`,
        headers: {
            'X-Api-Key' : 'e993fe0805de4ec0abaff5d967e9302a'
        },
        data: {
            q: $searchTerm,
            pageSize: 10
        },
        method: 'GET',
        success: (data) => {
            const $newsResults = $('.news-results');
            $($newsResults).empty();

            data.articles.forEach((article) => {
                $($newsResults).append(`
                    <h2> ${article.title} </h2>
                    <div>
                        <img src="${article.urlToImage}" alt="${article.title}">
                    </div>
                    <h4> ${article.author} </h4>
                    <p> ${article.description} </p>
                    <a href="${article.url}" target="_blank"> Go to the full article </a>
                `);
            });
        },
        error: (error) => {
            alert(error.responseJSON.message);
        } 
    });*/
   
});

