import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swiper2Container from './Swiper2Container'
import OffieceData from '../components/OffieceData'
import CoverCard2 from '../components/CoverCard2'
import { Card } from '@shopify/polaris'
import CoverCard3 from '../components/CoverCard3'

const Card2Container = () => {
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

    <Card>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-3'>

        {/* <OffieceData data={officeData}></OffieceData> */}
        <CoverCard2 data={officeData}></CoverCard2>
        {/* <CoverCard3 data={officeData}></CoverCard3> */}
          </div>
          <div className='col-9'>

        <Swiper2Container data={apiData}></Swiper2Container>
          </div>
        </div>
    </Card>
    </>
  )
}

export default Card2Container