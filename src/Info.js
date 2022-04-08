import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

 const Info = () => {

   const {id} = useParams()

   return (
     <div>
      <h1> Testo di {id} </h1>
     </div>
   )
 }

export default Info
