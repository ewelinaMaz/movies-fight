const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '87615f27',
            s: searchTerm
        }
    });

};

const input = document.querySelector('input');

let timeoutId;
const onInput = (event) => {
    if (timeoutId) {
        clearTimeout(timeoutId)
    }
   timeout = setTimeout(() => {
        fetchData(event.target.value);
    }, 500);  
};

input.addEventListener('input', onInput);
