const form = document.querySelector('#form');
const button = document.querySelector('.form-button');
const imgContainer = document.querySelector('.images-container')
form.addEventListener('submit' , (event) => {
    event.preventDefault();
    getShows();
})
const extractImages = (shows) => {
    shows.forEach(element => {
        if(element.show.image) {
            const img = document.createElement('img');
            img.src=element.show.image.medium;
            imgContainer.append(img);
        }
        
    })
}
const getShows = async () => {
    
    const searchTerm = form.elements.query.value;
    const config = {params : {q:searchTerm}}
    const res = await axios.get('https://api.tvmaze.com/search/shows',config);
    const shows = res.data ;
    console.log(shows)
    extractImages(shows)
    form.elements.query.value = '' ;

}




