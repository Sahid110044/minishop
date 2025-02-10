import React, { useEffect, useState } from 'react'

function Api1() {
    const [myapi,setmyapi] = useState([])
    const [loading,setloading] = useState(true)
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-12-01&sortBy=publishedAt&apiKey=174bf818dc7345c2ab1cb383321760a5`


    useEffect(()=>{
        const getapi = async()=>{
        try{
              const response = await fetch(url)
              const data = await response.json()
              setmyapi(data.articles)
              setloading(false)
            }
        catch(error)
        {
         console.log(error)
        }
    }
    getapi();

    },[url])
    console.log(myapi)

    if(loading){
        return <h1>loading...</h1>
    }

    if(myapi.length === 0){
        return(
            <h1>no api data is found</h1>
        )
    }
        
    return (
      <div>
        <h1>your news</h1> 
        {myapi.map((item,index)=>(
            <div key={index}>
                <p>{item.source.name}</p>
            </div>
        ))}
      </div>
    )

}
    

export default Api1