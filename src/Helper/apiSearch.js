let apiKey = "2c73b0f220a02912d9c2cd39c09588e2";
let apiDb = "http://api.themoviedb.org/3";

export default {
    searchByTitle: function (search, callback) {

        let url = `${apiDb}/search/movie?api_key=${apiKey}&query=${search}`;

        fetch(url)
            .then(raw => {
                return raw.json();
            })
            .then(info => {

                callback(info);
            })
            .catch(error => {
                console.error(error);
            });
    },
    searchMovie: function (id, callback) {

        let url = `${apiDb}/movie/${id}?api_key=${apiKey}`;

        fetch(url)
            .then(raw => {
                return raw.json();
            })
            .then(info => {

                callback(info);
            })
            .catch(error => {
                console.error(error);
        });
    },
    getImgLink(){
        return "https://image.tmdb.org/t/p/original";
    }
}