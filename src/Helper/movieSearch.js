
export default {
    searchMovie: function (id, api, apiKey, callback) {

        let url = `${api}movie/${id}?api_key=${apiKey}`;

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
    }
}