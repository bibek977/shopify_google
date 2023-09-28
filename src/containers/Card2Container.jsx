import React, { useContext} from 'react'
import Swiper2Container from './Swiper2Container'
import CoverCard2 from '../components/CoverCard2'
import { Card } from '@shopify/polaris'
import { ApiDataContext } from '../components/ContextData'

const Card2Container = () => {
  const {apiData,officeData} = useContext(ApiDataContext)
  return (
    <>

    <Card>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-lg-3 col-12'>

        {/* <OffieceData data={officeData}></OffieceData> */}
        <CoverCard2 data={officeData}></CoverCard2>
        {/* <CoverCard3 data={officeData}></CoverCard3> */}
          </div>
          <div className='col-lg-9 col-12'>

        <Swiper2Container data={apiData}></Swiper2Container>
          </div>
        </div>
    </Card>
    </>
  )
}

export default Card2Container