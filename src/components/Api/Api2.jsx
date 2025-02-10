import React, { useEffect, useState } from 'react'

function Api2() {
    const [apidata,setapidata] = useState([])
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        const fetchapi = async()=>{
            try{
                const response = await fetch(`https://gnews.io/api/v4/search?q=tesla&lang=en&country=us&max=10&apikey=08cd76100e01bfdaed8eea401068200b`)
                if(!response.ok) throw Error(`shahid api is corrupted ${response.status}`)
                const data = await response.json()
                setapidata(data)
                setloading(false)
            }catch(error){
                console.log(error)
                setloading(false)
            }
        }
        fetchapi()
    },[])
    
    
   
    if(loading){
        return <h1>loading...</h1>
    }

   if(apidata.length === 0){
    return <h1>NO DATA</h1>
   }
   console.log(apidata)
       return (
         <div>
             <h1>hello world how are you:</h1>
              {apidata.articles.map((item,index)=>(
                 <div key={index}>
                     <p>{item.title}</p>
                     <img src={item?item.image:"no image found "} alt="..." />
                 </div>
              ))}
         </div>
       )
   
}

export default Api2