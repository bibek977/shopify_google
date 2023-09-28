import React, { useContext } from 'react'
import SwiperContainer from './SwiperContainer'
import OffieceData from '../components/OffieceData'
import { ApiDataContext } from '../components/ContextData'

const CardContainer = () => {
    const {apiData,officeData}=useContext(ApiDataContext)
  return (
    <>

    <div style={{backgroundColor:'white'}}>
        <div className='row py-5'>
          <div className='d-flex justify-content-center align-items-center col-lg-3 col-12'>

        <OffieceData data={officeData}></OffieceData>

          </div>
          <div className='col-lg-9 col-12'>

        <SwiperContainer data={apiData}></SwiperContainer>
          </div>
        </div>
    </div>
    </>
  )
}

export default CardContainer