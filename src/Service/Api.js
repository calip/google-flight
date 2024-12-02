const fetchData = async (urlParams) => {
  const response = await fetch(`${process.env.REACT_APP_RAPID_BASE}${urlParams}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API
    }
  });
  const data = await response.json();
  return data;
}

const Service = {
  getData: (urlParams) => fetchData(urlParams)
}

export default Service