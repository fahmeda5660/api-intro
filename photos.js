function loadPhotos(){
    const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
function displayPhotos(datas){
    // console.log(datas);
    const photosContainer = document.getElementById('photos-container');
    for(const data of datas){
        const photosDiv = document.createElement('div');
        photosDiv.classList.add('post-style');

        photosDiv.innerHTML = `
        <h2>Id: ${data.id}</h2>
        <img src="${data.thumbnailUrl}" alt="">
        <h3>Title: ${data.title}</h3>
        `;
        photosContainer.appendChild(photosDiv);
    }
}
loadPhotos();