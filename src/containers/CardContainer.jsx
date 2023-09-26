import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SwiperContainer from './SwiperContainer'
import OffieceData from '../components/OffieceData'

const CardContainer = () => {
    const [apiData,setApiData] = useState([])
    const [officeData,setOfficeData] = useState([])

    useEffect(()=>{
      const getApiData = ()=>{
        axios
          .get("http://127.0.0.1:8000/api/")
          .then((r)=>{
            console.log(r.data.company)
            const {data} = r.data
            setApiData(data)
            setOfficeData(r?.data?.company)
          })
      }
      getApiData()
    },[])
  return (
    <>
        <div className='row'>
          <div className='col-3'>

        <OffieceData data={officeData}></OffieceData>
          </div>
          <div className='col-9'>

        <SwiperContainer data={apiData}></SwiperContainer>
          </div>
        </div>
    </>
  )
}

export default CardContainer