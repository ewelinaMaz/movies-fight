const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '87615f27',
            s: searchTerm
        }
    });

};

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    fetchData(event.target.value);
})
