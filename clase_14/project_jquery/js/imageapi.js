const requestUrl = 'https://api.unsplash.com/search/photos?query=argentina&client_id=xRl6QFSbTTVhD3PO_xrir5N9xGy-Dx6HXU9bwyvhr1s';
const imageToDisplay = document.querySelector('.imageToDisplay');

window.addEventListener('load', async () => {
    let randomImage = await getNewImage();
    imageToDisplay.src = randomImage;
});

async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
            let allImages = data.results[randomNumber];
            if(allImages.description === null){allImages.description = "Sin título"}
            $("#img_description").text ("Título: " + allImages.description)
            $("#img_alt_description").text ("Descripción: " + capitalizeFirstLetter(allImages.alt_description))
            $("#img_author").text ("Autor: " + allImages.user.first_name + " " + allImages.user.last_name)
            return allImages.urls.regular;
        });
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}