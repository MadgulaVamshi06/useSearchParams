import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    
      async function getData(url) {
        try {
          let response = await fetch(url);
          return await response.json();
        } catch (error) {
          console.log(error);
        }
      }
      
      
      const [data,setData]=useState([]);
      
      async function fetchAndUpdateData(url) {
        try {
          const apiResponse = await getData(url);
          setData(apiResponse.data);
         
        } catch (error) {
         console.log("Error", error)
        }
      }

      const {id}= useParams();
      console.log(id);
      
      useEffect(()=>{
        fetchAndUpdateData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
      },[id]);
      
        return (
          <div>
            <h1>{data.title}</h1>
              <div key={data.id}>
                <img src={data.image} alt={data.title} />
                <h3>Brand:{data.brand}</h3>
                <p>Category:{data.category}</p>
                <p>{data.title}</p>
                <p>Rs.{data.price}</p>
              </div> 
          </div>
        )   
}

export default Details