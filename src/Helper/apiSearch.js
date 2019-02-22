
export default {
    searchByTitle: function (search, api, apiKey, callback) {

        let url = `${api}search/movie?api_key=${apiKey}&query=${search}`;

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