const fetchData = async (apiUrl) => {
  const response = await fetch(apiUrl, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API
    }
  });
  const data = await response.json();
  return data;
}

const Service = {
  getData: (apiUrl) => fetchData(apiUrl)
}

export default Service