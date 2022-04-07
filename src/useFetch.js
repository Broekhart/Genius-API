import {useState, useEffect} from 'react';

const useFetch = (url) => {
const [data,setData] = useState(null);

useEffect(()=> {

  const options = {
method: 'GET',
headers: {
  'X-RapidAPI-Host': 'genius.p.rapidapi.com',
  'X-RapidAPI-Key': 'c6dc26ee51msh6071062bc8d0b39p12e832jsn88748cb729b4'
}
};

  fetch(url, options)
  .then(res => {
   return res.json()
  })
  .then(data =>{
    setData(data);
  })
}, [url])
return [data]
}

export default useFetch
