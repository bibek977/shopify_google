import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SwiperContainer from './SwiperContainer'

const CardContainer = () => {
    const [apiData,setApiData] = useState([])

    useEffect(()=>{
      const getApiData = ()=>{
        axios
          .get("http://127.0.0.1:8000/api/")
          .then((r)=>{
            const {data} = r.data
            // console.log(data)
            setApiData(data)
          })
      }
      getApiData()
    },[])
  return (
    <>
        <SwiperContainer data={apiData}></SwiperContainer>
    </>
  )
}

export default CardContainer