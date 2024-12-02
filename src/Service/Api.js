const apiUrl = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=new&locale=en-US';

const fetchData = async () => {
  const response = await fetch(apiUrl, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.RAPID_API
    }
  });
  const data = await response.json();
  return data;
}

const Service = {
  getData: () => fetchData()
}

export default Service