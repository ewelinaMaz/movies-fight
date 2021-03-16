const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "87615f27",
      s: searchTerm,
    },
  });
};

const input = document.querySelector("input");

const onInput = debounce(event => {
    fetchData(event.target.value);
});

input.addEventListener("input", onInput);
