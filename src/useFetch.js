import {useState, useEffect} from 'react';

const useFetch = (url, key) => {
const [data,setData] = useState(null);

useEffect(()=> {
  fetch(url, key)
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
