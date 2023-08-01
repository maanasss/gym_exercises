export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9e1e5da8afmshefe0c089a1f33eap15be58jsna95ecb30d9f4 ',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options ) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}