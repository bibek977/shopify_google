import { Grid } from '@shopify/polaris'
import React from 'react'
import "../components/slider4.css"
import CustomCard from '../components/CustomCard'

const Swiper4Container = (props) => {
    const {data} = props
  return (
    <>
    <div className="custom-scrollbar p-5">
    <div className="scroll-content">


      {/* <Card > */}
        <div className='row' >
        {
          data?.map((e,i)=>{
            return(
            <div className='col-xl-4 col-lg-6 col-sm-12'>
                <CustomCard data={e} key={i}></CustomCard>
            </div>
            )
          })
        }
         
        </div>
      {/* </Card> */}

      
      </div>
    </div>
    </>
  )
}

export default Swiper4Container