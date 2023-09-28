import React, { useContext} from 'react'
import Swiper3Container from './Swiper3Container'
import CoverCard2 from '../components/CoverCard2'
import { Card } from '@shopify/polaris'
import { ApiDataContext } from '../components/ContextData'

const Card3Container = () => {
  const {apiData,officeData} = useContext(ApiDataContext)
  return (
    <>

    <Card>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-12'>

        <CoverCard2 data={officeData}></CoverCard2>
          </div>
          <div className='col-12'>

        <Swiper3Container data={apiData}></Swiper3Container>
          </div>
        </div>
    </Card>
    </>
  )
}

export default Card3Container